import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "./Redux/Slices/CartSlice";

/* Display  cart Count

If an item is already there increase qty */
const Mapping = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>Name: {item.name}</h3>
      <h3>Price: {item.price}</h3>
      <button style={{ marginRight: "5px" }} onClick={() => dispatch(addToCart(item))}>
        Add To Cart
      </button>
      <button onClick={() => dispatch(deleteFromCart(item))}>
        Delete From Cart
      </button>
    </div>
  );
};

export default Mapping;



