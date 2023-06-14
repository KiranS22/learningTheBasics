const express = require("express");
const pool = require("../db");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    if (allProducts) {
      res
        .send({ data: allProducts.rows, status: "success", message })
        .status(200);
    } else {
      res.send({ status: "error" }).status(404);
    }
  } catch (e) {
    res
      .send({ status: "error", message: " Could not handle request" })
      .status(404);
  }
});

productRouter.post("/", async (req, res) => {
  try {
    let { title, price, description, rating, category, image } = req.body;
    console.log("products body", req.body);
    const newProduct = await pool.query(
      "INSERT INTO products( title, price, description, rating, category, image) VALUES($1, $2,$3,$4,$5,$6) RETURNING *",
      [title, price, description, rating, category, image]
    );
    if (newProduct) {
      res
        .send({ data: newProduct.rows[0], status: "success", message })
        .status(200);
    } else {
      res.send({ status: "error" }).status(404);
    }
  } catch (e) {
    res
      .send({ status: "error", message: " Could not handle request" })
      .status(404);
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    const foundProduct = await pool.query(
      "SELECT * FROM products WHERE id =$1",
      [Number(id)]
    );

    if (foundProduct) {
      res
        .send({
          data: foundProduct.rows[0],
          status: "success",
          message: "products fetched",
        })
        .status(200);
    } else {
      res.status(404).send({ status: "err", message: "product not found" });
    }
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const productToRemove = await pool.query(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      [Number(id)]
    );
    if (productToRemove) {
      res
        .send({
          data: productToRemove.rows[0],
          status: "success",
          message: `product ${id} has been deleted`,
        })
        .status(200);
    } else {
      res
        .status(404)
        .send({ status: "err", message: "Could not delete product" });
    }
  } catch (e) {
    console.log(e.message);
    res.send({ status: "error" }).status(404);
  }
});

productRouter.put("/:id", async (req, res) => {
  console.log("updated product");
  try {
    let { title, price, description, rating, category, image } = req.body;
    // console.log(req.body);
    let { id } = req.params;

    const updatedProduct = await pool.query(
      "UPDATE products SET title =$1, price = $2, description=$3, rating=$4, category=$5, image=$6 WHERE id =$7 RETURNING *",
      [title, price, description, rating, category, image, id]
    );
    console.log(updatedProduct);
    if (updatedProduct) {
      res
        .send({
          data: updatedProduct.rows[0],
          status: "success",
          message: `product ${id} has been updated`,
        })
        .status(200);
    } else {
      res
        .status(404)
        .send({ status: "err", message: "unable to update product" });
    }
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});

module.exports = productRouter;
