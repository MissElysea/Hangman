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
    "Arbys",
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

// Block all the Buttons

const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");

// Disable all options

  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

// Disable all letters

  letterButtons.forEach((button) => {
    button.disabled = true;
  });
  newGameContainer.classList.remove("hide");

  if (winCount === chosenWord.length) {
    setTimeout(() => {
      document.getElementById("success-audio").play();
    }, 0);
  } else if (count === 6) {
    setTimeout(() => {
      document.getElementById("lose-audio").play();
    }, 0);
  }

  };

// Word Generator

const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");

// If optionValue matches the button innerText then highlight the button

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

// Replace every letter with span containing dash

let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

// Display each element as span

playerSelectionSection.innerHTML = displayItem;
};
//Initial Function (Called when page loads/user presses new game)

const initializer = () => {
  winCount = 0;
  count = 0;

// Initially erase all content and hide letteres and new game button

  playerSelectionSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

// For creating letter buttons

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

// Number to ASCII[A-Z]

    button.innerText = String.fromCharCode(i);

// Character button click

    let charArray = [];

    button.addEventListener("click", () => {
      charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

// If array contains clciked value replace the matched dash with letter else dram on canvas

      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {

// If character in array is same as clicked button

          if (char === button.innerText) {

// Replace dash with letter

            dashes[index].innerText = char;

// Increment counter

            winCount += 1;

// If winCount equals word length

            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>Go head'!</h2><p>You guessed it. The word was <span>${chosenWord}</span></p>`;
              resultText.style.textAlign = 'center';

// Block all buttons

              blocker();
            }
          }
        });
      } else {
        
// Lose count

        count += 1;

// For drawing man

        drawMan(count);

// Count==6 because head,body,left arm, right arm,left leg,right leg

        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>Better Luck Next Time!</h2><p>The correct word was <span>${chosenWord}</span></p>`;
          resultText.style.textAlign = 'center';
          blocker();
        }
      }

// Disable clicked button

      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();

// Call to canvasCreator (for clearing previous canvas and creating initial canvas)

  let { initialDrawing } = canvasCreator();

// initialDrawing would draw the frame

  initialDrawing();
};

// Canvas

const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

// For drawing lines

  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

// Initial frame

  const initialDrawing = () => {

// Clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// Draw the man

const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();

  if (count === 1) {
    head();
  } else if (count === 2) {
    body();
  } else if (count === 3) {
    leftArm();
  } else if (count === 4) {
    rightArm();
  } else if (count === 5) {
    leftLeg();
  } else if (count === 6) {
    rightLeg();
  }
}; 

// New Game

newGameButton.addEventListener("click", initializer);
window.onload = initializer;
   
newGameButton.addEventListener("click", () => {
  // Pause the audio if it's currently playing
  document.getElementById("success-audio").pause();
  document.getElementById("lose-audio").pause();
  initializer();
});
