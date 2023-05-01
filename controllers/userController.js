const {User} = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    //get all users
    static async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController