// Day1:

//Task A1:Write a program to find the sum of first 7 numbers. //should give 28.
const addUpToMax = (max) => {
  let sum = 0;
  for (let i = 0; i <= max; i++) {
    let num = i;
    sum += num;
  }
  return sum;
};
// console.log(addUpToMax(7)); //28

//Task A2: Write a program to find the product of first 5 even numbers.
const firstFiveEvenProduct = (max) => {
  let sum = 1;
  for (let i = 1; i <= max; i++) {
    let num = i;
    if (num % 2 === 0) {
      sum *= num;
    }
  }

  return sum;
};
// console.log(firstFiveEvenProduct(5)); //8

//Task A3: Write a program that finds the sum of all odd numbers between 100 & 150. (Numbers will start from 101 till 149)

const sumOfAllOdds = (min, max) => {
  let sum = 0;
  for (let i = min + 1; i <= max; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(sumOfAllOdds(100, 150));

//Task A4: Write a program to find the factorial of a number (e.g. 5! = 5 x 4 x 3 x 2 x 1)
//4! = 64
//5! = 120
//6! = 720
const factorals = (num) => {
  let factors = 1;
  for (let i = 1; i <= num; i++) {
    factors *= i;
  }
  return factors;
};
console.log(factorals(5));
// Improve task4 and make it a function findFactorial(num) that takes in a number and returns the factorial value.
//Implementation:
//let result = findFactorial(5) //gives back 120

//Task  B1: Write a function sumArray(arr) that takes in an Array, and returns back the sum of all the elements.
//let nums = [15, 5, 70, 2, 5, 10, 13]
//console.log(sumArray(nums)) // should return 120
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 1; i <= arr; i++) {
    let num = arr[i];
    sum += num;
  }
  return sum;
};
sumArray([15, 5, 70, 2, 5, 10, 13]);
