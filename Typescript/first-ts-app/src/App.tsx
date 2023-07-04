import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { User, myType, UsersArr } from "./app.types";

function App() {
  //Strictly typed JS
  //super set of JS
  //variable:datatype
  //number

  // type UsersArr = {
  //   name: string;
  //   age: number;
  //   city: string;
  //   country?: myType;
  // }[]

  // Union
  let x: myType = 10;
  //string
  let y: myType = "Test";
  y = 100;
  //Boolean
  let z: myType = true;

  //Arrays
  let nums: number[] = [12, 30, 40];
  let names: string[] = ["John", "Robert"];

  //object (read-only)
  let user: User = {
    name: "Test",
    age: 100,
    city: "Helsinki",
    country: "Ireland",
  };

  user.contact = "12345";

  let arr: UsersArr = [
    {
      name: "Test",
      age: 100,
      city: "Helsinki",
      country: "Ireland",
    },
  ];
  arr.push({
    name: "Test2",
    age: 30,
    city: "Tokyo",
    country: "Japan",
  });

  console.log(arr);

  //nums.push("Tesst");

  // any
  let myVar: any = 100;
  myVar = true;

  //unknown
  let myVar2: unknown = 100;

  console.log(x);
  console.log(y);
  console.log(z);

  //Tuples  -  specific data type  at a specific locatiom
  let myTuple: [number, boolean, string, number, number] = [
    12,
    true,
    "THis is Me",
    33,
    55,
  ];
  myTuple[0] = 100;

  
  //Readonly Version - readonly cannot modify at all
  let myTuples: readonly [number, boolean, myType] = [10, false, 10];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
