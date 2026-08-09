//general syntax
// element.addEventListener("event", function () {
//   // Code to run
// });

// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   console.log("hello");
// });
// console.log("domEvents.js loaded");
// const title = document.querySelector("#title");
// const button = document.querySelector("#btn-change");
// button.addEventListener("click", function () {
//   console.log("Button clicked!");

//   title.textContent = "welcome to javascript";
// });

// console.log("JavaScript loaded");

// const title = document.querySelector("#title");
// const button = document.querySelector("#btn-change");

// console.log(title);
// console.log(button);

// button.addEventListener("click", () => {
//   console.log("Button clicked!");
//   title.textContent = "Welcome to JavaScript";
// });
const buttonEvent = document.querySelector("#btn-event");
console.log(buttonEvent);
buttonEvent.addEventListener("click", function (e) {
  console.log("button event clicked!");
  console.log(e.target.textContent);
});
const username = document.querySelector("#username");

username.addEventListener("input", function (e) {
  console.log(e.target.value);
});

const form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form Submitted!");
});

const header = document.querySelector("h2");
header.addEventListener("mouseover", function () {
  header.style.color = "red";
});
header.classList.add("highlight");
const message = document.querySelector("#message");
message.addEventListener("mouseout", () => {
  message.classList.toggle("hidden");
});
const darkButton = document.querySelector(".darkbutton");
darkButton.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    darkButton.textContent = "Light Mode";
  } else {
    darkButton.textContent = "Dark Mode";
  }
});
