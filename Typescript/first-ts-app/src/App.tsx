import React from "react";
import "./App.css";

import { User, myType, UsersArr } from "./app.types";
import Solutions from "./Solutions";
import Count from "./Count";

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

  // console.log(x);
  // console.log(y);
  // console.log(z);

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

  //Day 2

  type numType = number | string;

  let myNum: numType = 100;
  let myName: string = "John Doe";

  type funcType = (a: number, b: number) => string;

  // When having Fixed values
  type statusType = "error" | "success" | "warning";
  let responseStatus: statusType = "error";

  const myFunc: funcType = (a, b) => {
    console.log("Hello");
    return "Hello";
  };

  const myFunc2 = (x: string, y: number): void => {};

  /*
  type Prod = {
    title: string,
    price: string,
    category: string,
    sizes: string[]
  }
   */
  //Interface
  interface Prod {
    title: string;
    price: string;
    category: string;
    sizes: string[];
  }

  let myProd = {
    title: "Black Shoes",
    price: "$125.99",
    category: "Shoes",
    sizes: ["S", "M", "L"],
  };
  // In case of boolean props, we can only mention the prop name, and a true value gets sent by default.

  // Diff. between type & interface
  //Merging

  type TypeA = {
    a: number;
  };

  type TypeB = {
    b: number;
    c: string[];
  };
  //Merging TypeA & TypeB structure
  type TypeC = TypeA & TypeB;
  // {a,b,c}
  // type typeD = TypeC & {
  //   c: Number;
  // };
  let myU: TypeC = {
    a: 10,
    b: 9,
    c: ["test", "hello"],
  };

  /*
  interface infA {
    a: number;
  }

  interface infA {
    b: number;
  }
  */

  return (
    <>
      <h1>Learning TypeScript</h1>
      <Count myNum={myNum} myFunc={myFunc} myName={myName} isPositive />
      <Solutions />
    </>
  );
}

export default App;
