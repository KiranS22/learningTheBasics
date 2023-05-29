import React from "react";

const Text = ({ data, name }) => {
  console.log(name + "Text Rendered");
  return <div>{data}</div>;
};

export default React.memo(Text);
