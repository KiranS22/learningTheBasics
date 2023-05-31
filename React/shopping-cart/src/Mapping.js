import React from "react";
const Mapping = ({ item, id, addToCart }) => {
  return (
    <div>
      <h3> Name: {item.name}</h3> <h3>Price: {item.price}</h3>
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  );
};

export default Mapping;
