const express = require("express");
const categoryRouter = express.Router();
const pool = require("../db");

categoryRouter.get("/", async (req, res) => {
  try {
    const allCategories = await pool.query("SELECT * FROM categories");
    if (allCategories.rows.length > 0) {
      res
        .send({
          data: allCategories.rows,
          status: "success",
          message: "data fetched",
        })
        .status(200);
    } else {
      res
        .send({ status: "Error", message: "could not fetch data" })
        .status(404);
    }
  } catch (e) {
    res
      .send({ status: "Error", message: "could not handle request" })
      .status(404);
  }
});

categoryRouter.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await pool.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );
    if (newCategory.rows.length > 0) {
      res
        .send({
          data: newCategory.rows[0],
          status: "success",
          message: "category added",
        })
        .status(200);
    } else {
      res
        .send({ status: "Error", message: "could not insert  category" })
        .status(404);
    }
  } catch (e) {
    res
      .send({ status: "Error", message: "could not handle request" })
      .status(404);
  }
});

categoryRouter.get("/with-products", async (req, res) => {
  console.log("in endpoint ");
  // INNER JOIN DOESN'T GIVE DUPLICATES
  // READ ABOUT JOINS IN POSTGRES
  // SELECT *
  // FROM weather INNER JOIN cities ON (weather.city = cities.name);
  try {
    console.log("try runningi");
    const { email } = req.user;
    console.log(email);
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    console.log(user.rows[0]);
    if (user.rows[0]) {
      let userId = user.rows[0].id;
      const productsWithCat = await pool.query(
        "SELECT p.title AS PRODUCT_NAME, p.price AS PRODUCT_PRICE, p.description AS PRODUCT_DESCRIPTION, c.name AS CATEGORY_NAME FROM products AS p INNER JOIN categories AS c  ON (p.category_id = c.id) WHERE user_id = $1",
        [userId]
      );
      console.log(productsWithCat.rows);
      if (productsWithCat.rows.length > 0) {
        res
          .send({
            data: productsWithCat.rows,
            status: "success",
            message: `product's with categories  fetched`,
          })
          .status(200);
      } else {
        res
          .status(404)
          .send({ status: "err", message: "product or category  not found" });
      }
    } else {
      res.send({ status: "error", message: "user not found" }).status(404);
    }
  } catch (e) {
    res.send({ status: "error", message: e.message }).status(404);
  }
});

// jOIN PRODUCT AND USER TABLE JOIN BY USER ID (foriegn key)
categoryRouter.get("/with-users", async (req, res) => {
  try {
    console.log("try runningi");
    const { email } = req.user;
    console.log(email);
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    console.log(user.rows[0]);
    if (user.rows[0]) {
      let userId = user.rows[0].id;
      const productsWithUsers = await pool.query(
        "SELECT p.title AS PRODUCT_NAME, p.price AS PRODUCT_PRICE, p.description AS PRODUCT_DESCRIPTION, u.first_name AS USER_FIRST_NAME FROM products AS p INNER JOIN users AS u ON (p.user_id = u.id) WHERE user_id = $1",
        [userId]
      );
      console.log(productsWithUsers.rows);
      if (productsWithUsers.rows.length > 0) {
        res
          .send({
            data: productsWithUsers.rows,
            status: "success",
            message: `products with user  fetched`,
          })
          .status(200);
      } else {
        res
          .status(404)
          .send({ status: "err", message: "product or category  not found" });
      }
    } else {
      res.send({ status: "error", message: "user not found" }).status(404);
    }
  } catch (e) {
    res.send({ status: "error", message: e.message }).status(404);
  }
});

module.exports = categoryRouter;
