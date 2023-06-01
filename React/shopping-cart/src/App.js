import "./App.css";
import React, { useState, useEffect } from "react";
import Mapping from "./Mapping";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectCart, selectCount } from "./Redux/Slices/CartSlice";
import { selectProducts } from "./Redux/Slices/ProductsSlice";

function App() {
  let cart = useSelector(selectCart);
  let cartCount = useSelector(selectCount);

  let products = useSelector(selectProducts);

  return (
    <div className="App">
      <h1> Cart</h1>
      <h2>Cart Count: {cartCount}</h2>
      {cart.map((item) => {
        return <Cart item={item} />;
      })}

      {products.map((items, index) => {
        return <Mapping item={items} id={index} cartCount={cartCount} />;
      })}
    </div>
  );
}

export default App;
