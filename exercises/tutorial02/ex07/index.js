const prompt = require('prompt-sync')();
let input;
for (;;) {  // Infinite loop
    input = prompt("Enter 'exit' to break the loop:");
    if (input === "exit") {
        break;
    }
}
console.log("You've exited the loop.");