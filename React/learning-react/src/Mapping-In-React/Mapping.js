import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../shopping-cart/src/Redux/Slices/CartSlice";
/* Display  cart Count

If an item is already there increase qty */
const Mapping = ({ item, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3> Name: {item.name}</h3> <h3>Price: {item.price}</h3>
      <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
    </div>
  );
};

export default Mapping;
