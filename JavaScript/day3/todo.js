let delbtns;
let Todos = [];

let deleteTask = (id) => {
  Todos = Todos.filter((item, index) => id !== index);
  console.log("Todos after filter ", Todos);
  addTodos(Todos);
};

let addTodos = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const todos = arr[i];
    str += `<div> <p>${todos}</p>  <button data-id="${i}"  class="delete" onclick="deleteTask(${i})">Delete</button></div>`;
    document.getElementsByClassName("display")[0].innerHTML += str;
    document.getElementById("taskImp").value = "";
  }
};


document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault();

  let task = document.getElementById("taskImp").value;

  Todos.push(task);
  addTodos(Todos);

  delbtns = document.getElementsByClassName("delete");
});
