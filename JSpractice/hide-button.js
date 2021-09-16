const button1 = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
let counter = 0;
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

button1.addEventListener("click", function (e) {
  e.target.style.display = "none";
  button2.style.visibility = "";
  counter++;
  if (counter > 5) {
    alert("So, are you having fun?");
  }
});

button2.addEventListener("click", function (e) {
  e.target.style.visibility = "hidden";
  button1.style.display = "";
  counter++;
});

green.addEventListener("click", function (e) {
  alert("Incorrect");
});
yellow.addEventListener("click", function (e) {
  alert("CORRECT");
});
