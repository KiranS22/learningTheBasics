import React from "react";
import { Obj1, Obj2, Obj3 } from "./App";

interface DisplayInfoProps {
  myPerson: Obj1;
  myFaveNums: Obj2;
  myFaveLetters: Obj3;
}
const DisplayInterfaceInfo = ({
  myPerson,
  myFaveNums,
  myFaveLetters,
}: DisplayInfoProps) => {
  return (
    <>
      <div>
        <h2>Information about me:</h2>
        <h3>Basic Information</h3>
        <ul>
          <li>Name:{myPerson.name}</li>
          <li>Age: {myPerson.age}</li>
          <li>Favourite Color: {myPerson.colour}</li>
        </ul>
      </div>

      <div>
        <h3>My Faviourite numbers </h3>
        <ul>
          <li>{myFaveNums.num1}</li>
          <li> {myFaveNums.num2}</li>
          <li>{myFaveNums.num3}</li>
        </ul>
      </div>

      <div>
        <h3>My Faviourite letters </h3>
        <ul>
          <li>{myFaveLetters.char1}</li>
          <li> {myFaveLetters.char2}</li>
          <li>{myFaveLetters.char3}</li>
        </ul>
      </div>
    </>
  );
};

export default DisplayInterfaceInfo;
