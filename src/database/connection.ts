import { Sequelize } from "sequelize"
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: "postgres", 
    host: process.env.DB_HOST_IP,
})

module.exports = sequelize