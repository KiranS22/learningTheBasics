// Objects, for In Loop
//Task 1:
let product = { name: "watch", price: 14.5, color: "black", brand: "Timex" };
// Write a function 'changeData(obj)' that accepts 'product' object as the first argument, a property name as the second argument, and the property value as the third argument. The third argument gets replaced as the value of the key passed. Return the object

const changeData = (obj, name, val) => {
  return { ...obj, [name]: val };
};
// 700 / 500 = 1
// {500: 1}
// 700 % 500 = 200
//200 / 100 = 2
// {500: 1, 100: 2}

// console.log(changeData(product, "price", 30.5)); //Output: {name: 'watch',  price: 30.5, color: 'black', brand: 'Timex'}
// console.log(changeData(product, "color", "blue")); //Output: {name: 'watch',  price: 30.5, color: 'blue', brand: 'Timex'}

//Task 2: Mr. A owns a bank. When you want to have some change(money), you go to Mr. A. If you go to Mr. A and give him $2500,
// he gives back 5 notes of $500. Mr. A has notes of $500, $100, $50, $20, $10, $5 & $1.
// For Example, if you give $510, he'll return 1 note of $500 and 1 note of $10. Also if you give $277, he should return
// 2 notes of $100, 1 note of $50, 1 note of $20, 1 note of $5 and 2 notes of $1.
// Write a function 'returnChange(str)' that will accept an amount in str, and return back the change in an object format.
//Example:
// returnChange('$510') should return {'$500': 1, '$10': 1}
// returnChange('$277') should return {'$100': 2, '$50': 1, '$20': 1, '$5': 1, '$1': 2

//  Solved with help  
const returnChange = (str) => {
  let number = Number(str.slice(1));

  let avalibleChange = [500, 100, 50, 20, 10, 5, 1];
  let newChange = {};
  for (let i = 0; i < avalibleChange.length; i++) {
    const note = avalibleChange[i];
    let amount = parseInt(number / note);
    if (amount > 0) {
      number = number % note;
      newChange[` $${note}`] = amount;
    }
  }
  return newChange;
};

console.log(returnChange("$277"));

// Task 3: Write a function countColors(arr) that takes in an Array, and returns the number of times each color is repeated
// // in an object format.
const countColors = (arr) => {
  let colorsObj = {};

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i];
    if (!colorsObj.hasOwnProperty(name)) {
      colorsObj[name] = 1;
    } else {
      colorsObj[name]++;
    }
  }

  return colorsObj;
};

let colors = ["green", "orange", "yellow", "orange", "orange"];
let colors2 = [
  "indigo",
  "orange",
  "indigo",
  "orange",
  "black",
  "indigo",
  "indigo",
  "indigo",
];

console.log(countColors(colors));
console.log(countColors(colors2));

//Task 4: Write a function 'changetoCapital(arr)' that takes in an array, searches for vowels in the strings in the array and if there are 2 or more vowels in a word, transform the word to Uppercase. After modifications return the new array.
const changeToCapital = (inputArr) => {
  let newArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    let str = inputArr[i];
    let vowelCount = 0;
    let vowels = "AEIOUaeiou";

    for (let j = 0; j < str.length; j++) {
      if (vowels.includes(str[j])) {
        vowelCount++;
      }
    }

    if (vowelCount >= 2) {
      str = str.toUpperCase();
    }

    newArr.push(str);
  }

  return newArr;
};

let array = ["Carry", "Run Away", "Japan", "Australia", "Final String"];
console.log(changeToCapital(array));

//Task 5: Write a function 'reversal(str)' that accepts a string as a parameter and reverses the words in that string whose length is greater than 5.
const reverse = (str) => str.split("").reverse().join("");

const reversal = (str) => {
  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    let word = newStr[i];
    if (word.length > 5) {
      word = reverse(word);
      newStr[i] = word;
    }
  }

  return newStr.join(" ");
};

let message = "These are practice javascript questions";
console.log(reversal(message)); //Should return 'These are ecitcarp tpircsavaj snoitseuq'
