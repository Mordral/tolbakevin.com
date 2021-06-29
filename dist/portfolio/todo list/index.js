const input = document.querySelector("form > input");
const btn = document.querySelector("form > button");
const ul = document.querySelector("ul");
const form = document.querySelector("form");
const li = document.querySelector("li");
const del = document.getElementsByClassName("supr");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  ul.innerHTML += `<li>${input.value}</li><button class="supr">Surprimer</button>`;
  storage();
  input.value = "";
  return;
});
del.addEventListener("click", (event) => {
  event.preventDefault();
  li.target.remove;
  return;
});
function storage() {
  window.localStorage.todoList = ul.innerHTML;
  return;
}
