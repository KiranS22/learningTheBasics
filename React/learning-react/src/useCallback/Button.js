import React from "react";

const Button = ({ handleClick, name }) => {
  console.log(name + " Button Rendered");
  return (
    <div>
      <button onClick={() => handleClick()}>{name}</button>
    </div>
  );
};

export default React.memo(Button);
