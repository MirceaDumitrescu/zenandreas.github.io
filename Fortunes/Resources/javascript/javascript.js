const hamburgerButton = document.querySelector(".hamburger-icon");
const hamburgerLinks = document.querySelector(".hamburger");
const headerContent = document.querySelector("#headercontent");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const headerImg = document.querySelector(".header-image");
const fortuneBtn = document.querySelector(".fortune-btn");
const titleContent = document.querySelector(".title");
const fortuneText = document.querySelector(".fortune-text");
const randomFortune = document.querySelector(".random-fortune");
let Fortune;
const randomFortunes = [
  "You will win a million dollars! Yay!",
  "You will step on a piece of gum.",
  "You will be attacked by a fluffy bunny.",
  "You will meet your soul mate",
];

function hamburgerMenu() {
  if (hamburgerLinks.style.display === "block") {
    hamburgerLinks.style.display = "none";
    headerContent.style.transform = "translateY(0px)";
    content.style.transform = "translateY(0px)";
    footer.style.transform = "translateY(0px)";
  } else {
    hamburgerLinks.style.display = "block";
    headerContent.style.transform = "translateY(130px)";
    content.style.transform = "translateY(130px)";
    footer.style.transform = "translateY(130px)";
  }
}

function closeHamburgerMenu() {
  hamburgerLinks.style.display = "none";
  headerContent.style.transform = "translateY(0px)";
  content.style.transform = "translateY(0px)";
  footer.style.transform = "translateY(0px)";
}

function getRandomFortune() {
  let randomIndex = Math.floor(Math.random() * randomFortunes.length);
  Fortune = randomFortunes[randomIndex];
}

// function imageRotation() {
//   titleContent.style.display = "none";
//   headerImg.style.transform = "rotate(-360deg)";
//   headerImg.style.transition = "all 5s ease";
//   headerImg.style.width = "130%";
// }

///// Event Listeners

fortuneBtn.addEventListener("click", function () {
  if (!headerImg.classList.contains("animate")) {
    headerImg.classList.toggle("animate");
  }
  if (fortuneText.classList.contains("hidden")) {
    fortuneText.classList.toggle("visible");
    randomFortune.classList.toggle("hide-fortune");
    randomFortune.classList.toggle("show-fortune");
  } else {
    fortuneText.classList.toggle("hidden");
    randomFortune.classList.toggle("show-fortune");
    fortuneBtn.innerText = "Try again tomorrow!";
    fortuneBtn.style.pointerEvents = "none";
    fortuneBtn.style.background = "rgb(120, 120, 140)";
    getRandomFortune();
    randomFortune.innerText = Fortune;
  }
});

headerImg.addEventListener("animationend", function () {
  headerImg.classList.remove("animate");
});

///// Execute on page load
window.onresize = closeHamburgerMenu;
closeHamburgerMenu();
