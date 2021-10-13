const workTitle = document.querySelector(".work");
const workHours = document.querySelector(".work-hours");
const lastHours = document.querySelector(".last-work-hours");

const playTitle = document.querySelector(".play");
const playHours = document.querySelector(".play-hours");
const lastPlay = document.querySelector(".last-play-hours");

const studyTitle = document.querySelector(".study");
const studyHours = document.querySelector(".study-hours");
const lastStudy = document.querySelector(".last-study-hours");

const exerciseTitle = document.querySelector(".exercise");
const exerciseHours = document.querySelector(".exercise-hours");
const lastExercise = document.querySelector(".last-exercise-hours");

const socialTitle = document.querySelector(".social");
const socialHours = document.querySelector(".social-hours");
const lastSocial = document.querySelector(".last-social-hours");

const selfcareTitle = document.querySelector(".selfcare");
const selfcareHours = document.querySelector(".selfcare-hours");
const lastSelfcare = document.querySelector(".last-selfcare-hours");

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

//FETCH JSON DATA
const getData = () =>
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => display(data));

//EVENT LISTENERS
daily.addEventListener("click", selectOption);
weekly.addEventListener("click", selectOption);
monthly.addEventListener("click", selectOption);

function selectOption(e) {
  if (
    e.target.classList.contains("daily") &&
    !e.target.classList.contains("selected")
  ) {
    daily.classList.add("selected");
    weekly.classList.remove("selected");
    monthly.classList.remove("selected");
    getData();
  } else if (
    e.target.classList.contains("monthly") &&
    !e.target.classList.contains("selected")
  ) {
    daily.classList.remove("selected");
    weekly.classList.remove("selected");
    monthly.classList.add("selected");

    getData();
  } else if (
    e.target.classList.contains("weekly") &&
    !e.target.classList.contains("selected")
  ) {
    daily.classList.remove("selected");
    weekly.classList.add("selected");
    monthly.classList.remove("selected");

    getData();
  } else {
    console.error("Error");
  }
}

function display(data) {
  console.log(data);
  if (weekly.classList.contains("selected")) {
    // Inject data into box
    workTitle.innerHTML = data[0].title;
    workHours.innerHTML = `${data[0].timeframes.weekly.current}hrs`;
    lastHours.innerHTML = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
    // Inject data into box
    playTitle.innerHTML = data[1].title;
    playHours.innerHTML = `${data[1].timeframes.weekly.current}hrs`;
    lastPlay.innerHTML = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
    // Inject data into box
    studyTitle.innerHTML = data[2].title;
    studyHours.innerHTML = `${data[2].timeframes.weekly.current}hrs`;
    lastStudy.innerHTML = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
    // Inject data into box
    exerciseTitle.innerHTML = data[3].title;
    exerciseHours.innerHTML = `${data[3].timeframes.weekly.current}hrs`;
    lastExercise.innerHTML = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    // Inject data into box
    socialTitle.innerHTML = data[4].title;
    socialHours.innerHTML = `${data[4].timeframes.weekly.current}hrs`;
    lastSocial.innerHTML = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    // Inject data into box
    selfcareTitle.innerHTML = data[5].title;
    selfcareHours.innerHTML = `${data[5].timeframes.weekly.current}hrs`;
    lastSelfcare.innerHTML = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    // set menu link color
    weekly.style.color = "white";
    daily.style.color = "#7078c9";
    monthly.style.color = "#7078c9";
  } else if (daily.classList.contains("selected")) {
    workTitle.innerHTML = data[0].title;
    workHours.innerHTML = `${data[0].timeframes.daily.current}hrs`;
    lastHours.innerHTML = `Last Day - ${data[0].timeframes.daily.previous}hrs`;
    // Inject data into box
    playTitle.innerHTML = data[1].title;
    playHours.innerHTML = `${data[1].timeframes.daily.current}hrs`;
    lastPlay.innerHTML = `Last Day - ${data[1].timeframes.daily.previous}hrs`;
    // Inject data into box
    studyTitle.innerHTML = data[2].title;
    studyHours.innerHTML = `${data[2].timeframes.daily.current}hrs`;
    lastStudy.innerHTML = `Last Day - ${data[2].timeframes.daily.previous}hrs`;
    // Inject data into box
    exerciseTitle.innerHTML = data[3].title;
    exerciseHours.innerHTML = `${data[3].timeframes.daily.current}hrs`;
    lastExercise.innerHTML = `Last Day - ${data[3].timeframes.daily.previous}hrs`;
    // Inject data into box
    socialTitle.innerHTML = data[4].title;
    socialHours.innerHTML = `${data[4].timeframes.daily.current}hrs`;
    lastSocial.innerHTML = `Last Day - ${data[4].timeframes.daily.previous}hrs`;
    // Inject data into box
    selfcareTitle.innerHTML = data[5].title;
    selfcareHours.innerHTML = `${data[5].timeframes.daily.current}hrs`;
    lastSelfcare.innerHTML = `Last Day - ${data[5].timeframes.daily.previous}hrs`;
    daily.style.color = "white";
    weekly.style.color = "#7078c9";
    monthly.style.color = "#7078c9";
  } else if (monthly.classList.contains("selected")) {
    workTitle.innerHTML = data[0].title;
    workHours.innerHTML = `${data[0].timeframes.monthly.current}hrs`;
    lastHours.innerHTML = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
    // Inject data into box
    playTitle.innerHTML = data[1].title;
    playHours.innerHTML = `${data[1].timeframes.monthly.current}hrs`;
    lastPlay.innerHTML = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
    // Inject data into box
    studyTitle.innerHTML = data[2].title;
    studyHours.innerHTML = `${data[2].timeframes.monthly.current}hrs`;
    lastStudy.innerHTML = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
    // Inject data into box
    exerciseTitle.innerHTML = data[3].title;
    exerciseHours.innerHTML = `${data[3].timeframes.monthly.current}hrs`;
    lastExercise.innerHTML = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
    // Inject data into box
    socialTitle.innerHTML = data[4].title;
    socialHours.innerHTML = `${data[4].timeframes.monthly.current}hrs`;
    lastSocial.innerHTML = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
    // Inject data into box
    selfcareTitle.innerHTML = data[5].title;
    selfcareHours.innerHTML = `${data[5].timeframes.monthly.current}hrs`;
    lastSelfcare.innerHTML = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
    monthly.style.color = "white";
    daily.style.color = "#7078c9";
    weekly.style.color = "#7078c9";
  } else {
    console.log("Please select");
  }
}
