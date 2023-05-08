const {Comment} = require('../models');

class commentController {
    //create comment
    static async createComment(req, res, next) {
        try {
            const {comment, PhotoId} = req.body
            const user = res.locals.user

            const data = await Comment.create({
                comment,
                PhotoId,
                UserId: user.id
            })


            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({message: 'Comment must be filled and PhotoId must be number'})
            })


    }
        catch (err) {
            res.status(err?.code || 500).json(err)
            console.log(err);
        }
    }

    //get all comments  by userid login
    static async getAllComments(req, res, next) {
        try {
            const user = res.locals.user
            const data = await Comment.findAll({
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

    //update comment
    static async updateComment(req, res, next) {
        try {
            const {comment, PhotoId} = req.body
            const user = res.locals.user
            const id = req.params.id

            let data = {
                comment,
            }
            Comment.update(data, {
                where: {
                    id
                },
                returning: true
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

    //delete comment
    static async deleteComment(req, res, next) {
        try {
            const id = req.params.id
            const data = await Comment.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({message: 'Your comment has been successfully deleted'})
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

}

module.exports = commentController