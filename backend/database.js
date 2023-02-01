require("dotenv").config();
const mysql = require("mysql2/promise");

const datasource = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

datasource
  .getConnection()
  .then(() => console.warn("Database connected"))
  .catch((err) => console.error(err));

module.exports = datasource;
