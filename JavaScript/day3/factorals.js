/*
Create input field and button

when button is clicked, it calculates factoral
display bellow




*/

const factorals = (num) => {
  let factors = 1;
  for (let i = 1; i <= num; i++) {
    factors *= i;
  }
  return factors;
};

document.getElementById("result").addEventListener("click", () => {
  let num1Val = Number(document.getElementById("num").value);
  let result = factorals(num1Val);
  document.querySelector(".display").innerHTML = `<h2>${result}</h2>`;
});
