const todoInput = document.querySelector(".form-control");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".form-group-list");
const filterOption = document.querySelector(".filter-todo");

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filter);

function addTodo(event) {
  event.preventDefault();
  // create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("Todo-Item");
  // add li to div
  todoDiv.appendChild(newTodo);

  saveLocalTodos(todoInput.value);

  //add check mark todoButton
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-button");
  // add symbol button
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);

  //add delete todoButton
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-button");
  // add symbol button
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);

  // append entire div to parent in innerHTML
  todoList.appendChild(todoDiv);
  // clear input value;
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //delete item

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // GIVE AN ITEM COMPLETED STATUS

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// FILTER FUNCTION

function filter(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// LOCAL STORAGE SAVE

function saveLocalTodos(todo) {
  //CHECK for existing storage

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  //CHECK for existing storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("Todo-Item");
    // add li to div
    todoDiv.appendChild(newTodo);

    //add check mark todoButton
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-button");
    // add symbol button
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);

    //add delete todoButton
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    // add symbol button
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    // append entire div to parent in innerHTML
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const toDoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(toDoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
