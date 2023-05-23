import React from "react";
import { countContext } from "./App";
import { useContext } from "react";

// Consume the context
// Import the context hook that you created in sender
// import useContext where you want to use  it

const ChildOfChild = () => {
  let data = useContext(countContext);
  return <p style={{ fontWeight: "700" }}>Message using useContext {data}</p>;
};

export default ChildOfChild;
