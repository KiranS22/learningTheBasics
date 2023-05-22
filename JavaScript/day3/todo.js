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
  let str = "";
  for (let i = 0; i < Todos.length; i++) {
    const todos = Todos[i];
    document.getElementsByClassName("display")[0].innerHTML =
      str += `<div> <p>${[
        todos,
      ]}</p>  <button data-id =${i}  class="delete">Delete</button></div>`;
  }
  document.getElementById("taskImp").value = "";
});
console.log(document.getElementsByClassName(".delete")[0]);
