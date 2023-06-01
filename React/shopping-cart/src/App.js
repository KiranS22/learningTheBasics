import "./App.css";
import React, { useState, useEffect } from "react";
import Mapping from "./Mapping";
import Cart from "./Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  let arr = [
    { name: "watch", price: 20000, qty: 0 },
    { name: "bag", price: 400000, qty: 0 },
    { name: "shirt", price: 20, qty: 0 },
  ];
  const [products, setProducts] = useState(arr);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  useEffect(() => {
    const totalCount = cart.reduce((total, item) => total + item.qty, 0);
    setCartCount(totalCount);
  }, [cart]);

  return (
    <div className="App">
      <h1> Cart</h1>
      <h2>Cart Count: {cartCount}</h2>
      {cart.map((item) => {
        return <Cart item={item} />;
      })}

      {products.map((items, index) => {
        return (
          <Mapping
            item={items}
            id={index}
            addToCart={addToCart}
            cartCount={cartCount}
          />
        );
      })}
    </div>
  );
}

export default App;
