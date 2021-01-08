const pool = require("../helpers/connection");

const productsDB = {};

productsDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM products", (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.stringify(result));
    });
  });
};

productsDB.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM products WHERE id = ?", [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.stringify(result));
    });
  });
};

module.exports = productsDB;
