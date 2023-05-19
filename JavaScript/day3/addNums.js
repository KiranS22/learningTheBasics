/*
create 2 imput feilds and a button
on button click add input values and display sum

*/
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
