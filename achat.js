const body = document.querySelector("body");

const buttonDL = document.querySelector("#btn1");

buttonDL.addEventListener("click", function() {
  body.classList.toggle("nightMode");
})