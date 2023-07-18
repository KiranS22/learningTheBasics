import React from "react";
import "./App.css";

import { User, myType, UsersArr } from "./app.types";
import Solutions from "./Solutions";
import Count from "./Count";
import Display from "./Display";
import DisplayInterfaceInfo from "./DisplayInterfaceInfo";
import Generics from "./Generics";

// object types
export type Obj1 = {
  name: string;
  age: number;
  colour: string;
};

export type Obj2 = {
  num1: number;
  num2: number;
  num3: number;
};

export type Obj3 = {
  char1: string;
  char2: string;
  char3: string;
};

function App() {
  //Strictly typed JS
  //super set of JS
  //variable:datatype
  //number

  type UsersArr = {
    name: string;
    age: number;
    city: string;
    country?: myType;
  }[]

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
  // Code for Task 1
  // Create a Comp. Display       that takes in 4 props (Array, boolean ,number and a function). Call the function on button Click. Loop over the array in the child Comp. (use interface)

  // Task 1 types
  type TaskBool = boolean;
  type TaskArray = string[];
  type TaskNum = number;
  type TaskFunc = (num1: number, num2: number) => number;

  // Task 1 variables
  const myBool: TaskBool = false;
  const myArray: TaskArray = [
    "This ",
    "sentence",
    "was",
    "made",
    "using",
    "a",
    "Typescript",
    "array",
  ];

  const myTaskNum: TaskNum = 25;

  const addNums: TaskFunc = (num1, num2) => num1 + num2;

  // Task 2 objects
  const myPerson: Obj1 = {
    name: "Kiran",
    age: 23,
    colour: "PUrple",
  };

  const myFaveNums: Obj2 = {
    num1: 12,
    num2: 44,
    num3: 3,
  };
  const myFaveLetters: Obj3 = {
    char1: "a",
    char2: "a",
    char3: "a",
  };

  // 3. Create two types (first with 2 numbers, seocnd with 2 strings) and merge them together
  type Type1 = {
    num1: number;
    num2: number;
  };
  type m = Type1 & {
    str1: string;
    str2: string;
  };
  // Testing to see if merged

  const thisObjIsM: m = {
    num1: 123,
    num2: 456,
    str1: "abc",
    str2: "xyz",
  };
  console.log("Merged Object:", thisObjIsM);

  // 4. Merge three interfaces together (2 properties in first, 1 property in 2nd, 4 properties in third).

  interface MME {
    first: number;
    second: number;
  }

  interface MME {
    third: string;
  }

  interface MME {
    fourth: number;
    fifth: string;
    sixth: string[];
    seven: boolean;
  }

  // Testing if interd=faces have merged
  const shouldBeM: MME = {
    first: 13,
    second: 14,
    third: "hello",
    fourth: 15,
    fifth: "Typescript",
    sixth: ["Progtramming"],
    seven: true,
  };

  console.log("interface object created by merging", shouldBeM);
  return (
    <>
      <h1>Learning TypeScript</h1>
      {/* <Events
        style={{
          border: "1px solid orange",
          color: "white",
          fontWeight: "bold",
          background: "orange",
          padding: "8px 16px",
        }}
      /> */}
      <Count myNum={myNum} myFunc={myFunc} myName={myName} isPositive />
      <Solutions />
      <Generics />
      <Display
        myBool={myBool}
        myTaskNum={myTaskNum}
        addNums={addNums}
        myArray={myArray}
      />

      <DisplayInterfaceInfo
        myPerson={myPerson}
        myFaveNums={myFaveNums}
        myFaveLetters={myFaveLetters}
      />
    </>
  );
}

export default App;
