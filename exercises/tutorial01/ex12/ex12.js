
const prompt = require('prompt-sync')();
let num1 = prompt('Enter the first number: ');
let num2 = prompt('Enter the second number: ')
let num3 = prompt('Enter the third number: ');
let num4 = prompt('Enter the fourth number: ');

let average = (num1 + num2 + num3 + num4)/4;

console.log(`The average is ${average}`);