'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {foreignKey: 'userId'})
      Comment.belongsTo(models.Photo, {foreignKey: 'photoId'})
    }
  }
  Comment.init({
    comment: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Comment cannot be empty'
        }
      }
    },
    PhotoId : {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'PhotoId cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};