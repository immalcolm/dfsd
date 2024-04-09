
const prompt = require('prompt-sync')();
let radius = parseFloat(prompt("Enter the radius of the circle: "));
const pi = 3.14;
const area = pi * radius * radius;
console.log(`The area of the circle is: ${area.toFixed(2)} area`);