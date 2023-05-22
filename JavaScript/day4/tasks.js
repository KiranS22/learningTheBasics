// 1.    Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//

const toWeirdCase = (str) => {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let weirdWord = "";

    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        weirdWord += word[j].toUpperCase();
      } else {
        weirdWord += word[j].toLowerCase();
      }
    }

    result.push(weirdWord);
  }

  return result.join(" ");
};

console.log(toWeirdCase("This")); //'ThIs'
console.log(toWeirdCase("is")); //'Is'
console.log(toWeirdCase("This is a test")); //'ThIs Is A TeSt'
//  Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

const nextNum = (arr) => {
  let wholeNum = Number(arr.join(""));
  wholeNum++;
  let numStr = wholeNum.toString();
  let numArr = numStr.split("");
  return numArr;
};
console.log(nextNum([4, 3, 2, 5]));
