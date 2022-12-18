document.getElementById("btn1").style.color = "#f26ff5";




const body = document.querySelector("body");

const buttonDL = document.querySelector("#btn1");

buttonDL.addEventListener("click", function() {
  body.classList.toggle("woohoo");
})




const paragraphs = document.querySelectorAll('div')

console.log(paragraphs)

buttonDL.addEventListener("click", function() {
    for (let i =0; i < 7; i++) {
        paragraphs[i].classList.add("SelectAll");
    }
})








window.addEventListener('load', function() {
  body.classList.toggle("fondu");
})