import React from "react";

// Generics:
// Reusability

//Creating A Generics
//T is unknown for now
type FuncType<T> = {
  n: T[]; //n => string[]
  a: T; //T: string
  b: number;
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

myFunc({ n: ["Hello", "World"], a: "Run", b: 10 });

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

const Generics = () => {
  return <div>Generics</div>;
};

export default Generics;


