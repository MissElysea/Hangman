// Initial References

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
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

