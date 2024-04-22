const prompt = require('prompt-sync')();

//Write a program that asks the user to enter the value for these three variables: `X`, `Y`, `Z`
let x = Number.parseInt(prompt("Dollars: "));
let y = Number.parseInt(prompt("Cents: "));
let z = Number.parseInt(prompt("Number of muffins: "));

//reject if z <= 0
let totalCost = 0;
if(z > 0){
  //convert to cents and mutiply up
  totalCost = z * (x * 100 + y);
}

//print out the total cost
//convert to whole numbers by flooring(ignores the decimal) or use parseInt to get $ value
//use modulo to get cents
console.log(`Total Cost of ${z} muffins: $${Math.floor(totalCost/100)} and ${totalCost%100} cents ($${(totalCost/100).toFixed(2)})`);
