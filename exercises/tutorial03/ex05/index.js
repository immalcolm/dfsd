const prompt = require('prompt-sync')();

function calculateArea(width, height) {
    return width * height;
}

console.log("Area: " + calculateArea(5, 3));  // Outputs: Area: 15
