const { User } = require('../models')

const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {hashPassword} = require('../helpers/bcrypt')

class userController {
    //get all users
    static async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (err) {
            console.log(err);
            res.status(err?.code || 500).json(err)
            res.status(500).json(err)
            next(err)
        }
    }
    
    //regiter
    static async register(req, res) {
        try {
            const { full_name, email, password, username, profile_img_url, age, phone_number } = req.body
            const data = await User.create ({
                full_name,
                email,
                password,
                username,
                profile_img_url,
                age,
                phone_number
            })
            const response = {
                id: data.id,
                email: data.email,
                username: data.username,
                password: data.password,
                profile_img_url: data.profile_img_url,
                age: data.age,
                phone_number: data.phone_number
            }
            res.status(201).json(response)
        } catch (err) {
            // console.log(err);
            res.status(err?.code || 500).json(err)
            res.status(500).json(err)
        }
    }

    //login
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email : email
                }
            })
            if (!user) {
                throw {
                    code : 404,
                    message : 'Email not found'
                }
            }
            //compare password
            const comparedPassword = comparePassword(password, user.password)
            if (!comparedPassword) {
                throw {
                    code : 400,
                    message : 'Invalid email/password'
                }
                return next(err)
            }

            const response = {
                id: user.id,
                username: user.username,
                email: user.email,
            }
            const access_token = generateToken(response)
            res.status(200).json({ access_token })
            
        } catch (err) {
            // console.log(err);
            res.status(err?.code || 500).json({ message: err?.message || 'Internal server error' })
            res.status(500).json(err)
        }
    }

    //edit user
    static async updateUser(req, res, next) {
        try {
            const id = req.params.id
            const { full_name, email, password, username, profile_img_url, age, phone_number } = req.body
            const hashedPassword = hashPassword(password)
            const data = await User.update({
                full_name,
                email,
                password: hashedPassword,
                username,
                profile_img_url,
                age,
                phone_number
            }, {
                where: {
                    id: id
                },
                returning: true
            })
            res.status(200).json(data[1][0])
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

    //delete user
    static async deleteUser(req, res, next) {
        try {
            const id = req.params.id
            const data = await User.destroy({
                where: {
                    id: id
                }
            })
            res.status(200).json({ message: 'your account has been successfully deleted' })
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }
}

module.exports = userController