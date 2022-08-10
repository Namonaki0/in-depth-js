const insertTodoForm = document.querySelector(".insert-todo-form");
const searchTodo = document.querySelector(".search-todo-form input");
const list = document.querySelector("ul");

//? CREATE TODOS
const createTodo = (todo) => {
  const html = `<li class="inserted-todo">
            <span>${todo}</span><i class="delete fa-solid fa-trash-can"></i>
        </li>`;

  list.innerHTML += html;
};

//? TODOS INPUT FIELD HANDLER
insertTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = insertTodoForm.typedTodo.value.trim();

  if (todo) {
    createTodo(todo);
    insertTodoForm.reset();
  }
});

//? REMOVE TODOS
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//? FILTER TODOS
const filteredSearch = (searchedWord) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchedWord))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchedWord))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//? FILTER INPUT FIELD HANDLER
searchTodo.addEventListener("keyup", () => {
  const searchedWord = searchTodo.value.trim().toLowerCase();

  filteredSearch(searchedWord);
});
