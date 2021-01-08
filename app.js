const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const storeRoute = require("./routes/store");
const cartRoute = require("./routes/cart");
const homeRoute = require("./routes/home");

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/", storeRoute);
app.use("/cart", cartRoute);
app.use("/home", homeRoute);

app.listen(3000, () => console.log("Server running in port 3000"));
