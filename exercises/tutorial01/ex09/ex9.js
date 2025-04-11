//package to install 
//import in
//how to install >> npm install prompt-sync
const prompt = require('prompt-sync')();

let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");

let product = num1 * num2;

console.log(`${product}`);
