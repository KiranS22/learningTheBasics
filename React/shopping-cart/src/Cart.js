import React from "react";

const Cart = ({ item }) => {
  return (
    <div>
   
      <h3>Name: {item.name}</h3>
      <h3>Qty {item.qty}</h3>
    </div>
  );
};

export default Cart;
