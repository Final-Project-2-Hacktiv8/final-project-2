const { Photo } = require('../models');
const { User } = require('../models');
const { Comment } = require('../models');

class photoController {
    //create photo
    static async createPhoto(req, res, next) {
        try {
            const {title, caption, poster_image_url} = req.body
            const user = res.locals.user

            const data = await Photo.create({
                title,
                caption,
                poster_image_url,
                UserId: user.id
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })


        } catch (err) {
            res.status(err?.code || 500).json(err)
            // console.log(err);
        }
    }

    //get all photos by userid login
    static async getAllPhotos(req, res, next) {
        try {
            const user = res.locals.user
            const data = await Photo.findAll({
                where: {
                    UserId: user.id
                }
            })
            res.status(200).json(data)
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

    //get all photos
    static async getAllPhotosWithUser(req, res, next) {
        try {
            const data = await Photo.findAll({
                include: [User, Comment],
                attributes: {
                    exclude: ['UserId']
                }
            })
            res.status(200).json(data)
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }
    //update photo by id
    static async updatePhoto(req, res, next) {
        try {
            const {title, caption, poster_image_url} = req.body
            const {id} = req.params
            let data = {
                title,
                caption,
                poster_image_url
            }
            const result = await Photo.update(data, {
                where: {
                    id: id
                },
                returning: true
            })
            .then(data => {
                res.status(200).json(data[1][0])
            })
            .catch(err => {
                res.status(500).json(err)
            })
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

    //delete photo by id
    static async deletePhoto(req, res, next) {
        try {
            const {id} = req.params
            const data = await Photo.destroy({
                where: {
                    id: id
                }
            })
            .then(result => {
                res.status(200).json({message: 'Photo has been successfully deleted'})
            })
            .catch(err => {
                res.status(500).json(err)
            })
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

}

module.exports = photoController;