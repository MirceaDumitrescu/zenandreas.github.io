//comment out the alert once maintenance is complete
// alert('Page Under Maintenance');

const getJoke = document.querySelector(".get-joke");
const tellAnother = document.querySelector(".another-joke");

const jokeList = [
  "I only know 25 letters of the alphabet. I don't know y.",
  "How does the moon cut his hair? Eclipse it.",
  "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
  "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
  "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
  "My wife said I should do lunges to stay in shape. That would be a big step forward.",
  "I'm afraid for the calendar. Its days are numbered.",
  "How do you follow Will Smith in the snow? You follow the fresh prints.",
  "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
  "What did the ocean say to the beach? Nothing, it just waved.",
  "I don't trust those trees. They seem kind of shady.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "I don't trust stairs. They're always up to something.",
  "This graveyard looks overcrowded. People must be dying to get in.",
  "When two vegans get in an argument, is it still called a beef?",
  "What country's capital is growing the fastest? Ireland. Every day it's Dublin.",
  "I had a neck brace fitted years ago and I've never looked back since.",
  "I used to be a personal trainer. Then I gave my too weak notice.",
  "What do you call a fake noodle? An impasta.",
  "What do clouds wear? Thunderwear.",
  " wouldn't buy anything with velcro. It's a total rip-off.",
  "What would the Terminator be called in his retirement? The Exterminator.",
  "My boss told me to have a good day, so i went home.",
  "Hey, did you hear about the kidnapping at that school? Its okay we woke up!",
];
const jokeDisplay = {
  number: 0,
  randomJoke: function () {
    this.number = Math.floor(Math.random() * 23);
    document.getElementById("jokeSection").innerHTML = jokeList[this.number];
    document.getElementById("jokeCount").innerHTML = `Joke: ${
      this.number + 1
    } / 24`;
  },
  // setJoke: function () {
  //   document.getElementById("jokeSection").innerHTML =
  //     this.jokeList[this.number];
  //   document.getElementById("jokeCount").innerHTML = `Joke: ${
  //     this.number + 1
  //   } / 24`;
  // },
  prevJoke: function () {
    if (this.number > 0) {
      this.number--;
      this.setJoke();
    }
  },
  nextJoke: function () {
    if (this.number < this.jokeList.length - 1) {
      this.number++;
      this.setJoke();
    }
  },
};

//EVENT LISTENERS

getJoke.addEventListener("click", jokeDisplay.randomJoke);
