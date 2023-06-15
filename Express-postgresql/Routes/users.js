const express = require("express");
const pool = require("../db");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const allusers = await pool.query("SELECT * FROM users");
    console.log();
    if (allusers.rows.length > 0) {
      res.send({
        data: allusers.rows,
        status: "success",
        message: "fetched all users",
      });
    } else {
      res.send({ status: "error" }).status(404);
    }
  } catch (e) {
    res
      .send({ status: "error", message: " Could not handle request" })
      .status(404);
  }
});
userRouter.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const singleUser = await pool.query("SELECT * FROM users WHERE id = $1", [
      Number(id),
    ]);
    if (singleUser.rows.length > 0) {
      res
        .send({
          data: singleUser.rows[0],
          status: "success",
          message: `user ${id} fetched`,
        })
        .status(200);
    } else {
      res.status(404).send({ status: "err", message: "user not found" });
    }
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});
userRouter.put("/:id", async (req, res) => {
  try {
    let { first_name, last_name, email, password } = req.body;
    let { id } = req.params;
    const updatedUser = await pool.query(
      "UPDATE users SET first_name=$1, last_name = $2, email=$3, password=$4 WHERE id =$5 RETURNING *",
      [first_name, last_name, email, password, Number(id)]
    );
    if (updatedUser.rows.length > 0) {
      res
        .send({
          data: updatedUser.rows[0],
          status: "success",
          message: `user ${id} has been updated`,
        })
        .status(200);
    } else {
      res.status(404).send({ status: "err", message: "unable to update user" });
    }
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await pool.query("DELETE FROM users WHERE id = $1", [Number(id)]);

    res
      .send({
        status: "success",
        message: `user ${id} has been deleted`,
      })
      .status(200);

    res.status(404).send({ status: "err", message: "unable to delete user" });
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});

module.exports = userRouter;
