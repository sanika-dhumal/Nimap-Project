const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nimap_project",
});

module.exports = db;
