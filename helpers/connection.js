const mysql = require("mysql");

module.exports = mysql.createPool({
  connectionLimit: 10,
  password: "blacksheep",
  user: "root",
  database: "e_commerce",
  host: "localhost",
});
