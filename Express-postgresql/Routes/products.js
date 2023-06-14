const express = require("express");
const pool = require("../db");
const productRouter = express.Router();

let products = [
  {
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: "22.3",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: "4.1",
  },
  {
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: "4.7",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
];

productRouter.get("/", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    if (allProducts) {
      res.send({ data: allProducts.rows, status: "success" }).status(200);
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
      res.send({ data: newProduct.rows[0], status: "success" }).status(200);
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
    console.log("found product", foundProduct);
    if (foundProduct) {
      res.send({ data: foundProduct.rows[0], status: "success" }).status(200);
    } else {
      res.status(404).send({ status: "err", message: "product not found" });
    }
  } catch (e) {
    res.send({ status: "error" }).status(404);
  }
});

productRouter.delete("/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  products = products.filter((item) => item.id !== Number(id));
  res.send("Product Deleted Sucsessfuly");
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
      res.send({ data: updatedProduct.rows[0], status: "success" }).status(200);
    } else {
      res
        .status(404)
        .send({ status: "err", message: "unable to update product" });
    }
  } catch (e) {
    console.log(e.message);
    res.send({ status: "error" }).status(404);
  }
});

module.exports = productRouter;
