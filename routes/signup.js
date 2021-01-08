const router = require("express").Router();
const Users = require("../database/user.db");

router.get("/", (req, res) => {
  res.render("signup");
})
.post("/", createUser, (req, res) => {
  console.log("Try again, user already exits");
});

async function createUser(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (username) {
    const isNewUser = await Users.checkUser(email);
    if (isNewUser.length === 0) {
      const response = await Users.createNewUser(username, email, password);
      const userId = response.insertId;
      return res.redirect("/");
    }
  }
  next();
}

module.exports = router;
