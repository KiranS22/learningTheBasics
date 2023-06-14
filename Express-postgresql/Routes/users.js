const express = require("express");
const userRouter = express.Router();
let { users } = require("./auth");

userRouter.get("/", (req, res) => {
  res.send(users);
});

userRouter.put("/:id", (req, res) => {
  let { first_name, last_name, email, password } = req.body;
  let { id } = req.params;
  users = users.map((user) => {
    if (user.id === Number(id)) {
      return { ...user, first_name, last_name, email, password };
    } else {
      return user;
    }
  });
  res.send("User Updated");
});

userRouter.delete("/:id", (req, res) => {
  let { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send("User Deleted Sucsessfuly");
});

module.exports = userRouter;
