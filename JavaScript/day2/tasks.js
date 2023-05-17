//Task1: Write a function sumifNum(arr) that takes in an Array, and returns back the sum of all the elements that are
// numbers and greater than 0.
const sumifNum = (arr) => {
  let sum = 0;
  let numsOnly = arr.filter((i) => typeof i === "number");
  for (let i = 0; i < numsOnly.length; i++) {
    let num = numsOnly[i];
    if (num > 0) sum += num;
  }
  return sum;
};
let arr1 = ["Hello", 2, 56, "this", "is", -5];
let arr2 = ["a", 1, -2, -5, 0, 43, 6, "word"];
console.log(sumifNum(arr1)); //should return 58.
console.log(sumifNum(arr2)); //should return 50.

// Task2: Write a program to find the largest number in array 'numbers'. (Don't use any built-in array or number methods)
let numbers = [2, 3, -1, 5, 6, 100, 43, -34];
// Try task2 using both for & foreach loops.
const largestNumWithFor = (arr) => {
  let currentLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    if (el > currentLargest) currentLargest = el;
  }
  return currentLargest;
};
console.log(largestNumWithFor(numbers));

const largestNumWithForEach = (arr) => {
  let currentLargest = arr[0];
  arr.forEach((num) => {
    if (num > currentLargest) currentLargest = num;
  });
  return currentLargest;
};
console.log(largestNumWithForEach(numbers));
//Task3: Write a function reverseArr(arr) that reverses an array and returns it.
let numbers2 = [1, 2, 3, 4, 5, 6];
const revArray = (arr) => {
  let revNums = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i];
    revNums.push(num);
  }
  return revNums;
};

// console.log("numbers2 reverse ", revArray(numbers2));
const countries = [
  {
    name: "United States",
    population: 331002651,
    capital: "Washington, D.C.",
    currency: "United States Dollar",
    language: "English",
    continent: "North America",
    borders: [],
  },
  {
    name: "China",
    population: 1403500365,
    capital: "Beijing",
    currency: "Renminbi",
    language: "Mandarin Chinese",
    continent: "Asia",
    borders: [
      "Afghanistan",
      "Bhutan",
      "India",
      "Kazakhstan",
      "Kyrgyzstan",
      "Laos",
      "Macau",
      "Mongolia",
      "Myanmar",
      "Nepal",
      "North Korea",
      "Pakistan",
      "Russia",
      "Tajikistan",
      "Vietnam",
    ],
  },
  {
    name: "Brazil",
    population: 212559417,
    capital: "Brasília",
    currency: "Brazilian Real",
    language: "Portuguese",
    continent: "South America",
    borders: [
      "Argentina",
      "Bolivia",
      "Colombia",
      "French Guiana",
      "Guyana",
      "Paraguay",
      "Peru",
      "Suriname",
      "Uruguay",
      "Venezuela",
    ],
  },
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
  {
    name: "Australia",
    population: 25499884,
    capital: "Canberra",
    currency: "Australian Dollar",
    language: "English",
    continent: "Australia/Oceania",
    borders: [],
  },
  {
    name: "Mexico",
    population: 128932753,
    capital: "Mexico City",
    currency: "Mexican Peso",
    language: "Spanish",
    continent: "North America",
    borders: ["United States", "Belize", "Guatemala"],
  },
  {
    name: "Indonesia",
    population: 273523615,
    capital: "Jakarta",
    currency: "Indonesian Rupiah",
    language: "Indonesian",
    continent: "Asia",
    borders: ["Timor-Leste", "Papua New Guinea", "Malaysia"],
  },
];

//Task4: Write a program that finds all the countries that are in continent 'Asia'
let asiaAsContinent = countries.filter((c) => c.continent === "Asia");
// console.log(asiaAsContinent);

// Task5  : Write a program that filters out all countries whose name ends with 'an' and are not in 'Asia'
let filteredCountries = countries.filter((c) => {
  if (!c.name.endsWith("an") && c.continent !== "Asia") {
    return true;
  } else {
    return false;
  }
});
console.log(" Filtered", filteredCountries);

// Task6  : Write a program that sums the population of all non-asian countries.
let noneAsianPopulationSum = 0;
let notAsiaAsContinent = countries.filter((c) => c.continent !== "Asia");

const noneAsianPop = (arr) => {
  arr.forEach((c) => {
    noneAsianPopulationSum += c.population;
  });
  return noneAsianPopulationSum;
};
console.log(noneAsianPop(notAsiaAsContinent));

// Task7  : Write a program that checks if any country has a population more than 100 Million. If it has, add a property of status and give it a value of 'Densely Populated'.
let moreThan100M = countries.map((c) => {
  if (c.population > 100000000) c.status = "Densely Populated";
  return c;
});
console.log(moreThan100M);

let mixedArr = ["Hello", 2, 56, "this", "is", -5];
let lastArr = mixedArr.filter((i) => {
  return typeof i === "number";
});
// Task8  : Write a program that finds the sum of all elements in arr1. (use reduce)
let result = lastArr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("RES", result);
