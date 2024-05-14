///Q1: Write the code below to create an empty object stored in the variable alphaCount:
const prompt = require("prompt-sync")();
let message = prompt("Please enter something: ");
let alphaCount = {};

//Q2: Complete the code below, such that if the character stored in the variable alpha is
//not found as a property inside alphaCount, it will be stored in the alphaCount object as
//a property with value of 1:
for (let alpha of message) {
  //we check for the existence of the alpha(alphabet) in alphaCount
  if (alphaCount[alpha] === undefined) {
    alphaCount[alpha] = 1; //set a base value of 1 cos of the character initial count
  }
}
console.log(`\n------Q2------`);
console.log(alphaCount);

// Q3: Add an else to the if part from question 2, such that if alpha exists as a key in
//alphaCount, its value is increased by 1:
alphaCount = {};
for (let alpha of message) {
  //we check for the existence of the alpha(alphabet) in alphaCount
  if (alphaCount[alpha] === undefined) {
    alphaCount[alpha] = 1; //set a base value of 1 cos of the character initial count
  } else {
    alphaCount[alpha]++;
  }
}
console.log(`\n------Q3------`);
console.log(alphaCount);

//Q4: Print out on one line for each alphabet in the message string, the number of times it is found.
console.log(`\n------Q4------`);
alphaCount = {};
for (let alpha of message) {
  //we check for the existence of the alpha(alphabet) in alphaCount
  if (alphaCount[alpha] === undefined) {
    alphaCount[alpha] = 1; //set a base value of 1 cos of the character initial count
  } else {
    alphaCount[alpha]++;
  }
}

for (let alpha in alphaCount) {
  console.log(`${alpha}: ${alphaCount[alpha]}`);
}
