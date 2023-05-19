// Detructuring and spread opperator
// let person = { name: "Kiran", age: 23, gender: "f" };
// let colors = ["red", "blue", "green"];
// let person2 = { name: "Bob", age: 23, gender: "m" };
// // destructuring name and age
// let { name: person1name, hasCar = false } = person;
// let { name: person2name } = person2;
// console.log("Should be name", person1name, person2name);
// console.log("do they h ave a car?", hasCar);

// // Spread Operator - spreads the content so it's not in the array, but this is a copy of ther origional
// console.log([...colors, "pink"]);

// let colors2 = ["black", "orange", "yellow"];

// let cobinedArr = [...colors, "MID", ...colors2];

// console.log(cobinedArr);

// let person3 = { ...person, isNew: true, hobbies: ["Dancing"] };

// console.log("p3", person3);

// Inner html changes the elemnt's html inner text desplays whatever you write as plain text

let heading = (document.getElementById("heading").innerHTML =
  "<h2> I should be plan text</h2>");
console.log(heading);

document.getElementsByClassName("para")[0].style.color = "red"; // returns an array of nodes also known as a collection

console.log(document.getElementsByClassName("para")[0].style);

let myImp = document.getElementById("myImp");

document.querySelectorAll("p")[3].style.border = "2px solid red"; //Allo0ws you to target elements using css selwctors

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
  console.log("Clicked!");
  console.log(myImp.value);
});

document.getElementsByTagName("button")[0].addEventListener("mouseover", () => {
;
  document.getElementById("heading").style.color = "yellow";
});

document.getElementsByTagName("button")[0].addEventListener("mouseout", () => {
  document.getElementById("heading").style.color = "black";
});
