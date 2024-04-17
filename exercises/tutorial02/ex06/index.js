const prompt = require('prompt-sync')();
let guess;
const answer = 7;
do {
    guess = prompt("Guess the number (1 to 10):");
    guess = parseInt(guess);
    if (guess !== answer) {
        console.log("Wrong guess, try again!");
    }
} while (guess !== answer);
console.log("Congratulations! You guessed the number.");