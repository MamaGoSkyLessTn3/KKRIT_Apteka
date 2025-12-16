require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: "postgres",
    host: "localhost",
    port: 5434,
  },
);
sequelize.sync({ alter: true });
module.exports = sequelize;
