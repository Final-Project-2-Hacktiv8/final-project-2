const {SocialMedia} = require('../models')

class socialmediaController {
    //create social media
    static async createSocialMedia(req, res, next) {
        try {
            const user = res.locals.user
            const {name, social_media_url} = req.body
            const data = await SocialMedia.create({
                name,
                social_media_url,
                UserId: user.id
            })
            .then (data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        } catch (err) {
            console.log(err);
            res.status(err?.code || 500).json(err)
        }
    }

    //get all social media by userid login
    static async getAllSocialMedia(req, res, next) {
        try {
            const user = res.locals.user
            const data = await SocialMedia.findAll({
                where: {
                    UserId: user.id
                }
            })
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    //update social media
    static async updateSocialMedia(req, res, next) {
        try {
            const user = res.locals.user
            const {name, social_media_url} = req.body
            const id = req.params.id
            let data = {
                name,
                social_media_url,
            }
            SocialMedia.update(data, {
                where: {
                    id
                },
                returning : true
            })
            .then(data => {
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                res.status(500).json(err)
            })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    //delete social media
    static async deleteSocialMedia(req, res, next) {
        try {
            const id = req.params.id
            const data = await SocialMedia.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: 'Social Media has been deleted'})
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = socialmediaController