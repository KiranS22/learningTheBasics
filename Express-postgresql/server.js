/* Express is a node package used to create backends for web and mobile applications

1. initalise the dependancies npm init (--y = flag for yes if you don't want to customise the settings)

2. ionstall Express

3. Require express

3. Routuing

4. useing Postman
*/
require("dotenv").config();
const pool = require("./db");
const express = require("express"); // allows you to use express in your application using require import syntax
const app = express(); //The app variable allows you to access the express features within the  application (via the function call)
app.use(express.json()); //allows express to use json
const PORT = process.env.PORT || 4000;
let productRouter = require("./Routes/products");
let { authRouter } = require("./Routes/auth");
let userRouter = require("./Routes/users");
app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("I am home");
});

app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
  if (err) {
    console.log(err.message);
  }
});
