const hamburger = document.querySelector(".hamburger-menu");
const hamMenu = document.querySelector(".ham-nav");

hamburger.addEventListener("click", openBurger);

function openBurger() {
  hamMenu.classList.toggle("active");
}
