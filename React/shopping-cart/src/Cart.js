import React from "react";

const Cart = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Name: {item.name}</h3>
      <h3>Qty: {item.qty}</h3>
    </div>
  );
};

export default Cart;
