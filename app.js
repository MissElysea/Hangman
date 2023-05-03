// Initial References

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const playerSelectionSection = document.getElementById("player-selection-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// Button Options

let options = {

    Singers: [
    "Beyonce",
    "Usher",
    "Adele",
    "Lizzo",
    "Rihanna",
    "SZA",
  ],

  Sitcoms: ["Martin", "Friends", "Moesha", "Insecure", "Wednesday", "BelAir"],

  Restaurants: [
    "McDonalds",
    "ChickFilA",
    "KFC",
    "Popeyes",
    "Chipotle",
    "Wendys",
  ],
};

// Count

let winCount = 0;
let count = 0;
let chosenWord = "";

// Option Buttons

const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Choose A Category</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons

const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");

  //disable all options

  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters

  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

// Word Generator

const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");

  //If optionValur matches the button innerText then highlight the button

  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });
// initially hide letters, clear previous word

letterContainer.classList.remove("hide");
playerSelectionSection.innerText = "";

let optionArray = options[optionValue];

// choose random word

chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
chosenWord = chosenWord.toUpperCase();

//replace every letter with span containing dash

let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

//Display each element as span

playerSelectionSection.innerHTML = displayItem;
};
