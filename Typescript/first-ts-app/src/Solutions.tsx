import React from "react";

const Solutions = () => {
  // Task 0 Create 5 variables of different types. Assign types to them inline.

  const fisrtVar: number = 10;
  const secondVar: string = "Hello World";
  const thirdVar: boolean = true;
  const fourthVar: null = null;
  const fifthVar: undefined = undefined;
  console.log("First:", fisrtVar);
  console.log("Second:", secondVar);
  console.log("Third :", thirdVar);
  console.log("Fouth :", fourthVar);
  console.log("Fifth:", fifthVar);

  // Task 1  Create a variable myVar, assign it a type so that it can be either a number or a string or null
  const myVar: string | number | null = "I have many possible types";

  console.log("myVar:", myVar);

  // Task 2 Create an Array of Products, and assign type accordingly
  type Product = {
    name: string;
    price: number;
    qty: number;
    description: string;
  };

  const productsArray: Product[] = [];

  const firstProduct: Product = {
    name: "bag",
    price: 12.0,
    qty: 7,
    description: "Black bag",
  };

  const secondProduct: Product = {
    name: "shoes",
    price: 49.99,
    qty: 3,
    description: "Running shoes",
  };

  const thirdProduct: Product = {
    name: "hat",
    price: 8.5,
    qty: 10,
    description: "Blue hat",
  };

  productsArray.push(firstProduct, secondProduct, thirdProduct);

  console.log("Array of products", productsArray);

  // Task 3 Create a type 'hello', for a company Object (Have 5,6 properties including array and strings and optional props. as well)

  type hello = {
    name: string;
    departments: string[];
    num_employees: string;
    country?: string;
    location: string;
  };
  const company1: hello = {
    name: "ABC Inc.",
    departments: ["Sales", "Marketing", "Finance"],
    num_employees: "100",
    country: "USA",
    location: "New York",
  };

  const company2: hello = {
    name: "XYZ Corp.",
    departments: ["HR", "Operations", "IT"],
    num_employees: "250",
    location: "London",
  };

  const company3: hello = {
    name: "123 Co.",
    departments: ["Engineering", "Product", "Customer Support"],
    num_employees: "50",
    country: "Canada",
    location: "Toronto",
  };

  const company4: hello = {
    name: "PQR Ltd.",
    departments: ["Research", "Quality Assurance"],
    num_employees: "75",
    location: "Berlin",
  };

  console.log(
    "company 1",
    company1,
    "company2",
    company2,
    "company3",
    company3,
    "company 4 ",
    company4
  );

  return <div>Solutions</div>;
};

export default Solutions;
