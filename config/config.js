const { sequelize } = require("../models")

require("dotenv").config()

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    url : process.env.DB_URL
  },
  production: {
    username: process.env.DB_USERNAME_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    dialect: "postgres",
    port: process.env.DB_PORT_PROD,
    url : process.env.DB_URL_PROD
  }
}


module.exports = config