/*
create 2 imput feilds and a button
on button click add input values and display sum


Create input field and button

when button is clicked, it calculates factoral
display bellow



Create JavaScript Todo - add and delete functionality



Read about create Elemnt and append child

*/
// functions for both tasks

const factorals = (num) => {
  let factors = 1;
  for (let i = 1; i <= num; i++) {
    factors *= i;
  }
  return factors;
};

const sumOfNums = (num1, num2) => {
  return num1 + num2;
};
// ----------------------------------

document.getElementById("add").addEventListener("click", () => {
  let num1Val = Number(document.getElementById("num1").value);
  let num2Val = Number(document.getElementById("num2").value);
  let result = sumOfNums(num1Val, num2Val);
  document.querySelector(".display").innerHTML = `<h2>${result}</h2>`;
});
