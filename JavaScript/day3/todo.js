/*
Create JavaScript Todo - add and delete functionality

*/

let Todos = [];

document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault();
  let task = document.getElementById("taskImp").value;
  Todos.push(task);
  document.getElementById("taskImp").value = "";

  let todoDiv = `<div> <p>${[
    task,
  ]}</p>  <button class="delete">Delete</button></div>`;

  document.getElementsByClassName("display")[0].innerHTML += todoDiv;
});

console.log("Delete Buttons ", document.getElementsByClassName("delete"));
