const express = require("express");
const userRouter = express.Router();
let { users } = require("./auth");

userRouter.get("/", (req, res) => {
  res.send(users);
});

userRouter.put("/:id", (req, res) => {});

userRouter.delete("/:id", (req, res) => {});

module.exports = userRouter;
