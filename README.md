Link To Wireframe 

https://replit.com/@MissElysea/Project-1-Wireframe#


1. Used to determine the count.
  
  Set winnerCount to 0
  Set count to 0
  Set selectedWord to ""

2. Set 'Options' to 'Singers', 'Sitcoms', and 'Fast Food' for player to select either button for their category of choice.

3. Allows the player to choose from a set of buttons containing letters from A-Z to guess the random word from 'Options'.
  
  [loop]
    let index start at the ASCII code for "A"(65) and goes up to the ASCII code for "Z"(90)
  [loop]

  Set letterArray to selectedWord 

  If letterArray is selectedWord iterate through each element of letterArray, which represents each letter   of the selectedWord using forEach.

  If the winnerCount is set to the letterArray length increment the winnerCount by one and check to see if   it is equal to the length of the letterArray, which means that all the letters were guessed correctly. This will display "You're a winner!"

  Else increment count by one to update the drawing of hangman if count is set to 6, meaning that the player has made 6 incorrect guesses. This will         display "You're a loser!"

4. drawHangMan takes 'count' as an argument and is responsible for drawing the different parts of hangman as the player makes incorrect guesses.

  If count is set to either 1-6 it will draw the different parts of the hangman.

Link To Project
  
https://misselysea.github.io/Unit-1-Project/
