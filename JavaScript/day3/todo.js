/*
Create JavaScript Todo - add and delete functionality

*/

let Todos = [];
document.addEventListener("change", () => {
  let task = document.getElementById("taskImp").value;
  Todos.push(task);
});

document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < Todos.length; i++) {
    const todos = Todos[i];
    document.getElementsByClassName("display")[0].innerHTML += `<div> <p>${[
      todos,
    ]}</p>  <button>Delete</button></div>`;
  }
  document.getElementById("taskImp").value = "";
});
