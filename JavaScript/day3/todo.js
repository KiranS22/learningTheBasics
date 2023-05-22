let Todos = [];
let delbtns = document.getElementsByClassName("delete");
for (let i = 0; i < delbtns.length; i++) {
  const element = delbtns[i];
  element.addEventListener("click", () => {
    console.log("working");
    let delId = delbtns.getAttribute("data-id");
    deleteTask(delId);
  });
}
let deleteTask = (id) => {
  Todos.splice(id, 1);
};

document.addEventListener("change", () => {
  let task = document.getElementById("taskImp").value;
  Todos.push(task);
});

document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault();
  let str = "";
  for (let i = 0; i < Todos.length; i++) {
    const todos = Todos[i];
    str += `<div> <p>${todos}</p>  <button data-id="${i}"  class="delete">Delete</button></div>`;
  }
  document.getElementsByClassName("display")[0].innerHTML += str;
  document.getElementById("taskImp").value = "";
});
