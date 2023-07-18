import React from "react";

// Generics:
// Reusability

//Creating A Generics
//T is unknown for now
type FuncType<T> = {
  n: T[]; //n => string[]
  a: T; //T: string
  b: T;
};

const myNewObject: FuncType<number> = {
  n: [10, 20],
  a: 100,
  b: 10,
};

type numOrStrOrBool = boolean | null;

let y: numOrStrOrBool = null;
// {
//n : [numbers]
// }
const myFunc = <T extends string>(arg: FuncType<T>) => {
  console.log("FIrst");

  console.log("b:", arg.b);
  console.log("n:", arg.n);
  console.log("a:", arg.a);
};

myFunc({ n: ["Hello", "World"], a: "Run", b: "10" });

const myFunc2 = <T extends number>(arg2: FuncType<T>) => {
  console.log("Second");

  console.log("b:", arg2.b);
  console.log("n:", arg2.n);
  console.log("a:", arg2.a);
};

myFunc2({ n: [10, 30], a: 100, b: 10 });

//Type
type myNewType<T, S> = {
  names: T[];
  ages: S[];
};

const newFunc = <T extends string, S extends number>(args: myNewType<T, S>) => {
  console.log("Names:", args.names);
  console.log("Ages:", args.ages);
};
const data = { names: ["10", "20"], ages: [10, 230] };
newFunc(data);

type GType<A, C> = {
  countries: A[];
  numbers: C[];
  name: A;
  age: C;
  count?: A | C | boolean;
};

// type AType = {
//   n: number;
// };

// type combinedT = AType & GType<string, number>;

//Interfaces
interface MyType<A, C> {
  countries: A[];
  numbers: C[];
  name: A;
  age: C;
  count?: A | C | boolean;
}

// A: String | C: number
const myObject: GType<number, string> = {
  countries: [1],
  numbers: ["Hello"],
  name: 12,
  age: "John",
};

console.log("my object", myObject);

interface MyInterface<A, B, C> {
  first: A[];
  second: B;
  Third: C;
}
//  object using interface and generic

const interfaceWithG: MyInterface<string, number, boolean> = {
  first: ["a", "b", "c"],
  second: 12,
  Third: true,
};

console.log("INTERFACE", interfaceWithG);

const Generics = () => {
  return <div>Generics</div>;
};

export default Generics;
