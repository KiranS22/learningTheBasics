const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");
const jwt = require("jsonwebtoken");
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
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1 ", [
      email,
    ]);
    if (user.rows.length > 0) {
      const founduser = user.rows[0];
      let validPass = await bcrypt.compare(password, founduser.password);
      if (validPass) {
        const token = jwt.sign({ email: founduser.email }, process.env.SECRET); // The data  passed into the object is used when the jwt token is sent to the server. It is decripted and then the data assocated to that object property is sent back to the frontend

        // This token gets sent back to the frontend and then every request from ther frontentyend to the backend the token travel's  with it so that we can see if the user is authenticated or not.

        res.send({ status: "success", message: "user logged in", token });
      } else {
        res.send({
          status: "error",
          message: "user with these credentails not found",
        });
      }
    } else {
      res.send({ status: "error", message: "User not found" }).status(404);
    }
  } catch (e) {
    res.send({ status: "error", message: e.message }).status(404);
  }
});

module.exports = { authRouter, users };
