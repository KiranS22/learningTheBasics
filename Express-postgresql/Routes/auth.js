const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");
// HashSync - syncronus
// Hash - is async so requires await keyword
const authRouter = express.Router();
let users = [];
authRouter.post("/register", async (req, res) => {
  try {
    let { first_name, last_name, email, password } = req.body;
    let salt = await bcrypt.genSalt(10); // runs the cycle of password encrytion
    let hash = await bcrypt.hash(password, salt); //Coverts into hashed string
    const newUser = await pool.query(
      "INSERT INTO users(first_name, last_name, email, password) VALUES($1,$2,$3,$4)",
      [first_name, last_name, email, hash]
    );
    if (newUser) {
      res.send({
        data: newUser.rows[0],
        status: "success",
        message: "user registered",
      });
    } else {
      res
        .send({ status: "error", message: "Could not register user" })
        .status(404);
    }
  } catch (e) {
    res
      .send({ status: "error", message: "Could not register user" })
      .status(404);
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //Finds the user in the users array who's email matches the passed in email
  let foundUserInDB = users.find((user) => user.email == email);
  // if the user is found then compare the hashed password with the password that's passed in
  // then we can allow the user to log in. If not then we throw an error

  if (foundUserInDB) {
    let validPass = await bcrypt.compare(password, foundUserInDB.password);
    if (validPass) res.send({ status: "success", message: "user logged in" });
  } else {
    res.send({
      status: "error",
      message: "user with these credentails not found",
    });
  }
});

module.exports = { authRouter, users };
