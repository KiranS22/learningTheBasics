/* Express is a node package used to create backends for web and mobile applications

1. initalise the dependancies npm init (--y = flag for yes if you don't want to customise the settings)

2. ionstall Express

3. Require express

3. Routuing

4. useing Postman
*/

/*
Middlewaer is a function that runs before the request. It allowss us to conduxt operations before running the main body of the request
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
const jwt = require("jsonwebtoken");

const isUserLoggedIn = (req, res, next) => {
  const token = req.headers.authorization; // extracting the token from the auth header
  if (token) {
    let plainToken = token.slice(7); // removing the 'Bearer ' keyword
    jwt.verify(plainToken, process.env.SECRET, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .send({ status: "Error", message: "invalid token" });
      }
      req.user = decoded;
      next(); // pass control to the next middleware function
    });
  } else {
    return res.status(401).send({ status: "Error", message: "not authorized" });
  }

  // The next param passes the control to the next middleware function

};

app.use("/products", isUserLoggedIn, productRouter); // middlewear can be paddef as second argument in app.use()
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
