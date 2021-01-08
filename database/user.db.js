const pool = require("../helpers/connection");

const usersDB = {};

usersDB.checkUser = (email) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
};

usersDB.createNewUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO users (name, email, password) VALUES(?, ? ,?)",
      [username, email, password],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
};

module.exports = usersDB;
