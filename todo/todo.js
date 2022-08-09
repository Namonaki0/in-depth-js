const insertTodoForm = document.querySelector(".insert-todo-form");
const list = document.querySelector("ul");

//? CREATE TODOS
const createTodo = (typedTodo) => {
  const html = `<li class="inserted-todo">
            <span>${typedTodo}</span><i class="delete fa-solid fa-trash-can"></i>
        </li>`;

  list.innerHTML += html;
};

//? TODOS INPUT FIELD HANDLER
insertTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const typedTodo = insertTodoForm.todo.value.trim();

  if (typedTodo) {
    createTodo(typedTodo);
    insertTodoForm.reset();
  }
});

//? REMOVE TODOS
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
