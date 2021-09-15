import "./style.css";

const todoInput = document.querySelector(".form-control");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".form-group-list");

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  console.log("hello!");
}
