const body = document.querySelector(".body");

const button = document.querySelector("#btn1");

button.addEventListener("click", function() {
  body.classList.toggle("nightMode");
})