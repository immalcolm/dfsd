const prompt = require('prompt-sync')();

const birthYear = prompt("Enter your birth year (YYYY): ");
const currentYear = prompt("Enter the current year (YYYY):");
const age = currentYear - birthYear;
console.log("Your age is: " + age);
