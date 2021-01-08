const pool = require("../helpers/connection");

const cartDB = {};

cartDB.addToCart = (userId, productId, quantity) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO cart (userId, productId, quantity) VALUES (?, ?, ?)",
      [userId, productId, quantity],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
};

cartDB.deleteFromCart = (userId, productId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM cart WHERE userId = ? AND productId = ?",
      [userId, productId],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
};

cartDB.getProductsFromCart = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM cart WHERE userId = ?",
      [userId],
      (err, result) => {
        if (err) return reject(err);
        return resolve(JSON.stringify(result));
      }
    );
  });
};

module.exports = cartDB;
