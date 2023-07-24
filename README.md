## This project aims to provide an engaging and user-friendly word-guessing game. Below, you will find a detailed explanation of the key functionalities and the aesthetics we have implemented for an enhanced user experience.

Link to wireframe: https://replit.com/@MissElysea/Project-1-Wireframe#
<br>
Link to live project: https://misselysea.github.io/Unit-1-Project/

## Game Objective

The main goal of this word-guessing game is to guess the randomly selected word from a set of predefined categories. Players can choose their preferred category, including 'Singers', 'Sitcoms', and 'Fast Food', by selecting the respective buttons.

## Guessing Mechanism

The player will have the opportunity to guess letters from A to Z, which will be presented as buttons. Each letter guessed will be checked against the selected word to determine if it matches any of its letters.

## Winning & Losing Conditions

As the player makes correct guesses, a 'winnerCount' will be incremented accordingly. If the 'winnerCount' equals the length of the selected word, indicating that all the letters have been correctly guessed, the player will be declared a winner.

However, if the player makes six incorrect guesses (tracked by the 'count' variable), the game will display "You're a loser!"

## Visual Representation

We have carefully designed the interface to display the hangman as the player makes incorrect guesses. The 'drawHangMan' function is responsible for visually updating the hangman's parts based on the 'count' variable. Different parts of the hangman will be drawn progressively as incorrect guesses accumulate (count: 1-6).

I am committed to continuously improving the aesthetics and user experience of this project. Your valuable feedback is always welcome, and I appreciate your interest in this repository!

Thank you for your support and happy word-guessing!
