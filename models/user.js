'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Photo, {foreignKey: 'userId'})
      User.hasMany(models.Comment, {foreignKey: 'userId'})
      User.hasMany(models.SocialMedia, {foreignKey: 'userId'})
    }
  }
  User.init({
    full_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Full name cannot be empty'
        },
        notNull : false
      }
    },
    email: {
      type : DataTypes.STRING,
      unique : {
        args : true,
        msg : 'Email already registered'
      },
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Password cannot be empty'
        }
      }
    },
    username: {
      type : DataTypes.STRING,
      unique : {
        args : true,
        msg : 'Username already registered'
      },
      notNull: false
    },
    profile_img_url: {
      type : DataTypes.TEXT,
      validate : {
        isUrl : {
          args : true,
          msg : 'Profile image URL must be in URL format'
        }
      },
      notNull: false
    },
    age: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Age cannot be empty'
        },
        isNumeric : {
          args : true,
          msg : 'Age must be in number format'
        }
      },
      notNull: false
    },
    phone_number: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          args : true,
          msg : 'Phone number cannot be empty',
        },
        isNumeric : {
          args : true,
          msg : 'Phone number must be in number format'
        },
        // len : {
        //   args : [10, 13],
        //   msg : 'Phone number must be between 10 to 13 digits'
        // },

      },
      notNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};