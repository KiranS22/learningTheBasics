import React from "react";
import { useEffect } from "react";
import ChildOfChild from "./ChildOfChild";
const Child = (props) => {
  let { count, isThere, myName, headerStyling } = props;
  // useEffect(() => {
  //   console.log(" Child useEffect Ran");
  // }, []);

  return (
    // passing props using the props object
    // <div>
    //   <p> Count in child: {props.count}</p>
    //   <p> Boolean Passed As Props: {props.isThere}</p>
    //   <p> Name passed as props: {props.myName}</p>
    // </div>

    <div>
      <h1 className="myClass">Child</h1>
      {/* Passing props using destructuring  */}
      <p style={headerStyling}> Count in child: {count}</p>
      <p> Boolean Passed As Props: {isThere}</p>
      <p> Name passed as props: {myName}</p>
      <ChildOfChild/>
    </div>
  );
};

export default Child;
