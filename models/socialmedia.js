'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socialmedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      socialmedia.belongsTo(models.user, {foreignKey: 'userId'})
    }
  }
  socialmedia.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Social media name cannot be empty'
        }
      }
    },
    social_media_url: {
      type : DataTypes.TEXT,  
      validate : {
        isUrl : {
          args : true,
          msg : 'Social media URL must be in URL format'
        },
        notEmpty : {
          args : true,
          msg : 'Social media URL cannot be empty'
        
        }
      }
    }
  }, {
    sequelize,
    modelName: 'socialmedia',
  });
  return socialmedia;
};