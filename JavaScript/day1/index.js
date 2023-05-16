// Variables
// Containers for temporary reasons
// Data Types
/* String Array Number Object Boolean  */
// Arithmatic operators
/*
+ - * % / ++ --
 */

// Conditional > < >= <= == === !== !=

// Logical && || !
//  asignment =
//  === checks valued and datatype
//  == checks the  value only
// let num = 15
// if (NaN) {
//   console.log(true);
// }else{
//   console.log(false);
// }
let str = "Hello";
let strCount1 = 0;
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    strCount1++;
  }
}
console.log(strCount);

let index = 0;
let strCount = 0;
while (index < str.length) {
  let char = str[index];
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    strCount++;
  }
  index++;
}
console.log(strCount);

// functions
const greaterNum = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
// greaterNum(5, 59);

// 3 args num1 num2 num3 opperation sum difference product or dibvision

const numOperations = (num1, num2, op) => {
  if (op === "sum") {
    return num1 + num2;
  } else if (op === "difference") {
    return num1 - num2;
  } else if (op === "product") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
};

// console.log("answers", numOperations(10, 5, "sum"));

// String Methords
// .length - hnum of charactors in a string inc spaces

let str1 = "Hello String";
console.log(str1.length);
console.log("index", str1.indexOf(" "));

if (str1.indexOf("A") !== -1) {
  console.log("S is there ");
} else {
  console.log(false);
}
if (str1.includes("A")) {
  console.log("charactor is there ");
} else {
  console.log(false);
}

let res = str1.charAt(2);
console.log(res);

//  Slice returns a new string amd doesn't modify the origional
let substr = str1.slice(6);
// console.log(substr);

let strArr = str1.split(" ");
// console.log(strArr);

let start = str1.startsWith("H"); //true
let end = str1.endsWith("l"); // false
let startMulti = str1.startsWith("Hell"); // true

console.log("start ", start, "end", end, "multistart", startMulti);

let caseChange = str1.toUpperCase();
console.log(caseChange);

let str2 = "           Hello                ";
let trimed = str2.trim();
console.log("string2", str2, "trimmed", trimed);

let colors = ["red", "blue", "green"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
colors[2] = "pink";
console.log(colors);

// returns number ogf elemnets in  an array
console.log(colors.length);
// Array to string converter
console.log(colors.join(" "));

// Array Slice
let singleColorArr = colors.slice(1, 2);
console.log("   ", singleColorArr);

// insdexOf Array
console.log("index of  color ", colors.indexOf("pink"));

// includes arr
console.log("inc", colors.includes("red"));

// Array methords that modify the existing array
colors.push("black"); // inserts elements at the end of teh array
console.log(colors);

colors.pop(); //removes end element

colors.shift(); // removes from start of array
console.log(colors);
colors.unshift("purple"); //inserts purple at the start
console.log(colors);
