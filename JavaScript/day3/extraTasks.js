// Objects, for In Loop
//Task 1: let product = { name: 'watch', price: 14.5, color: 'black', brand: 'Timex' }
// Write a function 'changeData(obj)' that accepts 'product' object as the first argument, a property name as the second argument, and the property value as the third argument. The third argument gets replaced as the value of the key passed. Return the object

// console.log(changeData(product, 'price', 30.5))  //Output: {name: 'watch',  price: 30.5, color: 'black', brand: 'Timex'}
// console.log(changeData(product, 'color', 'blue'))  //Output: {name: 'watch',  price: 30.5, color: 'blue', brand: 'Timex'}

//Task 2: Mr. A owns a bank. When you want to have some change(money), you go to Mr. A. If you go to Mr. A and give him $2500,
// he gives back 5 notes of $500. Mr. A has notes of $500, $100, $50, $20, $10, $5 & $1.
// For Example, if you give $510, he'll return 1 note of $500 and 1 note of $10. Also if you give $277, he should return
// 2 notes of $100, 1 note of $50, 1 note of $20, 1 note of $5 and 2 notes of $1.
// Write a function 'returnChange(str)' that will accept an amount in str, and return back the change in an object format.
//Example:
// returnChange('$510') should return {'$500': 1, '$10': 1}
// returnChange('$277') should return {'$100': 2, '$50': 1, '$20': 1, '$5': 1, '$1': 2

// Task 3: Write a function countColors(arr) that takes in an Array, and returns the number of times each color is repeated
// // in an object format.
//let colors = ['green', 'orange', 'yellow', 'orange', 'orange']
//let colors2 = ['indigo', 'orange', 'indigo', 'orange', 'black', 'indigo', 'indigo', 'indigo']
//countColors(colors) //should return {'green': 1, 'orange': 3, 'yellow': 1}
//countColors(colors2) //should return {'indigo': 5, 'orange': 2, 'black': 1}

//Task 4: Write a function 'changetoCapital(arr)' that takes in an array, searches for vowels in the strings in the array and if there are 2 or more vowels in a word, transform the word to Uppercase. After modifications return the new array.
// let arr = ["Carry", "Run Away", "Japan", "Australia", "Final String"]

//Task 5: Write a function 'reversal(str)' that accepts a string as a parameter and reverses the words in that string whose length is greater than 5.

// let message = 'These are practice javascript questions'
//console.log(reversal(message))  //Should return 'These are ecitcarp tpircsavaj snoitseuq'
