// ARRAYS
// Array Splice allows for insert and delete from array modifies the origuional array

let arr1 = [1, 2, 3, 4, 5];
console.log("Before splice", arr1);
arr1.splice(
  1,
  0,
  "new",
  "old"
); /*  first arg is the index that you want to modify The second index defines whether you want to remove or add. If the value is greater than 0. Then that number of items will be removed. But if it is 0 then that indecates insertion.*/

console.log("After splice", arr1);

newArr = [4, 5, 6, 7, 8];
let sum = 0;
newArr.forEach((num) => {
  //iterates through origional array
  sum += num;
});
// console.log("forEach Sum", sum);

// map

let strArr = ["hello", "goodbye", "morning", "goodnight"];

let mappedStr = strArr.map((s) => {
  let upperStr = s.toUpperCase();
  return upperStr;
});
// console.log(mappedStr);

let countries = [
  {
    name: "Russia",
    population: 145934462,
    capital: "Moscow",
    currency: "Russian Ruble",
    language: "Russian",
    continent: "Europe/Asia",
    borders: [
      "Azerbaijan",
      "Belarus",
      "China",
      "Estonia",
      "Finland",
      "Georgia",
      "Kazakhstan",
      "North Korea",
      "Latvia",
      "Lithuania",
      "Mongolia",
      "Norway",
      "Poland",
      "Ukraine",
    ],
  },
  {
    name: "India",
    population: 1380004385,
    capital: "New Delhi",
    currency: "Indian Rupee",
    language: "Hindi, English",
    continent: "Asia",
    borders: ["Bangladesh", "Bhutan", "China", "Myanmar", "Nepal", "Pakistan"],
  },
  {
    name: "Canada",
    population: 38005238,
    capital: "Ottawa",
    currency: "Canadian Dollar",
    language: "English, French",
    continent: "North America",
    borders: ["United States"],
  },
];

let bordersWithChina = countries.map((cont) => {
  if (cont.borders.includes("China")) cont.bordersWithChina = true;
  else cont.bordersWithChina = false;
  return cont;
});

// console.log(bordersWithChina);

// ,filter()

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let newNums = nums.filter((num) => num % 2 === 0);
// console.log(newNums);

let withChina = bordersWithChina.filter((c) => c.bordersWithChina === true);

// console.log("expecting all  true", withChina);

let greaterThan500M = countries.filter((c) => c.population > 500000000);
// console.log("", greaterThan500M);

// .reduce()

nums.reduce((acc, curr) => {
  // the valyue returned within the callback function is the value of the acc
  console.log(acc);
  return acc + curr;
}, 0);

let strArr2 = ["hello", "goodbye", "morning", "goodnight"];
let bigStr = strArr2.reduce((acc, string) => {
  // console.log(acc);
  return acc + string;
}, "");

console.log(bigStr);

// every - if all elements in the arr satisfies the xcondition it trurns true  otherwise false
// find - returns one element the f irst elemnet that meets ther condition
// some - returns true if 1 or more elemnts meet the condition, opthwerwise false
// findIndex - returns first index of elemnt that meets the codition

// // OBJECTS
let person = {
  name: "Kiran",
  age: 23,
  gender: "f",
  hobbies: ["programming", "music", "sleeping"],
  adress: { street: "123 street", city: "london", postcode: 12345 },
  userInfo: () => {
    console.log("I am a func within a obj");
  },
};
console.log("street?", person.adress.street);
console.log("sleeping?", person.hobbies[person.hobbies.length - 1]);
person.userInfo();

 console.log(person.name);
 console.log(person["age"]); //bracket notation is mainly uised when proip names are saved in vars or have specail chars/spaces
 person.age = 20;
 console.log(person.age);

 // Object.keys
 console.log(Object.keys(person)); // returns all keys (property names) of your objerct in array format

 // Object.values
 console.log(Object.values(person)); //returns all  values of your objerct in array format

 // Object.entries
 console.log(Object.entries(person)); // creates an array with subArrays containing each keyt vale pair

 // hasOwnProperty
console.log(person.hasOwnProperty("name")); // retuens a bollewan value depending on if the property exists within the object

// // for in loop - interates through the keys  and is  used to find the values
for (let p in person) {
  console.log(person[p]);
}

// // CANNOT USE FOR OR foreach on an object
