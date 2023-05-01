const {verifyToken} = require('../helpers/jwt.js');
const {User} = require('../models');

const authentication = async (req, res, next) => {
    try {
        const token = req.get('token');
        const userdecoded = verifyToken(token);
        User.findOne({
            where: {
                id: userdecoded.id,
                email: userdecoded.email
            }
        })
        .then(user => {
            if(!user){
                return res.status(401).json({
                    message: 'User not authenticated',
                    devMessage : `User with id ${userdecoded.id} not found`
                })
            }
            res.locals.user = user;
            return next();
        })
        .catch(err => {
            return res.status(500).json({
                message: 'Internal Server Error',
                devMessage: err
            })
        })

    } catch (error) {
        return res.status(401).json(error)
        console.log(error);
    }
}

module.exports = authentication;