const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(input.value);
  if (input.value.trim() === "") {
    return;
  }
  const todo = document.createElement("li");
  const content = document.createElement("span");

  content.textContent = input.value;

  const removeContent = document.createElement("button");
  removeContent.textContent = "X";
  removeContent.addEventListener("click", () => {
    todo.remove();
  });
  todo.append(content);

  todo.append(removeContent);
  list.append(todo);

  input.value = "";
  content.addEventListener("click", () => {
    content.classList.toggle("completed");
  });
});
