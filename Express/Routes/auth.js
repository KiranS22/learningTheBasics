const express = require("express");
const bcrypt = require("bcryptjs");
// HashSync - syncronus
// Hash - is async so requires await keyword
const authRouter = express.Router();
let users = [];
authRouter.post("/register", async (req, res) => {
  let { first_name, last_name, email, password } = req.body;
  let salt = await bcrypt.genSalt(10); // runs the cycle of password encrytion
  let hash = await bcrypt.hash(password, salt); //Coverts into hashed string
  let emailExists = users.find((user) => user.email === email);
  if (emailExists) {
    res.send({ status: "err", message: "User already exists" });
  } else {
    let user = {
      id: users.length + 1,
      first_name,
      last_name,
      email,
      password: hash,
    };
    users.push(user);
    res.send("user added");
  }
});

authRouter.post("/login", (req, res) => {
  
});

module.exports = { authRouter, users };
