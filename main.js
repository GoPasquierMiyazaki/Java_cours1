const body = document.querySelector("body");

const buttonDL = document.querySelector("#btnDL");

buttonDL.addEventListener("click", function() {
  body.classList.toggle("nightMode");
})




const para = document.createElement("h2");
para.innerText = "Bienvenue";
const element = document.getElementById("textJAVA");
element.appendChild(para);
