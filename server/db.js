require('dotenv').config()
const {Sequelize } = require('sequelize')
const { FORCE } = require('sequelize/lib/index-hints')


const sequelize = new Sequelize(
	process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    host: 'localhost',
    port:5432
  }
)
sequelize.sync({ alter: true });
module.exports = sequelize
