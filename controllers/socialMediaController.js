const { SocialMedia, User } = require("../models");

class SocialMediaController {
  static async createSocialMedia(req, res) {
    try {
      const UserId = res.locals.user.id;
      const { name, social_media_url } = req.body;
      let data = {
        UserId,
        name,
        social_media_url,
      };

      const newSocmed = await SocialMedia.create(data, { returning: true });
      const response = {
        id: newSocmed.id,
        name: newSocmed.name,
        social_media_url: newSocmed.social_media_url,
        UserId: newSocmed.UserId,
        createdAt: newSocmed.createdAt,
        updatedAt: newSocmed.updatedAt,
      }
      if (newSocmed) {
        res.status(201).json({
          social_media: response,
        });
      }
    } catch (err) {
      // console.log(err);
      return res.status(401).json(err);
    }
  }

  static async getSocialMedia(req, res) {
    try {
      const allSocmed = await SocialMedia.findAll({ include: User });
      const social_medias = allSocmed.map((user) => {
        // console.log(user);
        return {
          id: user.id,
          name: user.name,
          social_media_url: user.social_media_url,
          UserId: user.UserId,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          User: {
            id: user.User.id,
            username: user.User.username,
            profile_img_url: user.User.profile_img_url,
          },
        };
      });
      if (allSocmed) {
        // console.log(allSocmed);
        res.status(200).json({
          social_medias
        });
      }
    } catch (err) {
      // console.log(err);
      res.status(401).json(err);
    }
  }

  static async updateSocialMedia(req, res) {
    try {
      const socmedId = req.params.id;
      const { name, social_media_url } = req.body;

      const updatedUser = await SocialMedia.update(
        { name, social_media_url },
        {
          where: {
            id: socmedId,
          },
          returning: true,
        }
      );

      if (updatedUser) {
        const response = {
          id: updatedUser[1][0].id,
          name: updatedUser[1][0].name,
          social_media_url: updatedUser[1][0].social_media_url,
          UserId: updatedUser[1][0].UserId,
          createdAt: updatedUser[1][0].createdAt,
          updatedAt: updatedUser[1][0].updatedAt,
        }
        return res.status(200).json({
          social_medias: response,
        });
      }
    } catch (err) {
      // console.log(err);
      return res.status(401).json(err);
    }
  }

  static async deleteSocialMedia(req, res) {
    try {
      const socmedId = req.params.id;
      const deletedSocmed = await SocialMedia.destroy({
        where: { id: socmedId },
      });

      if (deletedSocmed) {
        return res.status(200).json({
          message: "Your social media has been successfully deleted",
        });
      }
    } catch (err) {
      // console.log(err);
      return res.status(401).json(err);
    }
  }
}

module.exports = SocialMediaController;
