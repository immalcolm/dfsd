var prompt = require("prompt-sync")();
//Q1
/*
for(let i = 1; i <= 100; i++){
    console.log(`Number: ${i}`);
}*/
//Q2
for (let i = 10; i >= 1; i--) {
  console.log(`Number: ${i}`);
  if (i == 1) {
    console.log("Blast off");
  }
}
//Q3
do {
  //any userinput is a string
  let userInput = prompt("Enter a number: ");
  //convert to number
  let num = parseInt(userInput);
  //check whether num is between 1 and 10
  if (num >= 1 && num <= 10) {
    break;
  } else {
    console.log("Invalid number. Please enter a number between 1 and 10");
  }
} while (true);

let valueA = 30;
let valueB = 20;

//call the function
let sumA = sumOfNumbers(valueB);
let sumB = sumOfNumbers(valueA, valueB);

console.log(sumOfNumbers(valueA, valueB));

function sumOfNumbers(num1, num2 = 10){

    total = num1 + num2;

    return (num1+ num2);// total;
}





//Q4: Simple Interest Calculate
//What's the loop condition?
//how to calculate simple interest? totalamount* interest
//how to calculate total amount? totalamount + "interest amount"
//whats the interest rate?
//what kind of output
//decimal?
/*
const interest = 0.05;
let principal = 1000;
let totalAmount = principal; //our total amount with the principal as the base
let year = 0;

while (totalAmount <= (2 * principal)) {
  year++; //increment year
  totalAmount += totalAmount * interest; //total amount = total amount + total amount * interest
  console.log(`Year ${year} with Total Amount: ${totalAmount}`);
  
  
  //check if total amount is double the principal
  
    //can we enhance this to our loop condition?
    if(totalAmount >= 2 * principal){
        break;
    }
}
*/

/*
   Exercise 5: Print Even Numbers
    Objective: Write a for loop that prints all even numbers from 2 to 20.
    Hint: The increment being used is key.
*/
for(let i = 2; i <= 20; i+=2){
    console.log(i);
}

/*
    Exercise 4: Simple Interest Calculator
    Objective: Write a while loop that calculates simple interest every year until the total amount doubles.
    Challenge: not to use any if statement
    Common Mistake:
    Using an incorrect formula for simple interest calculation, or failing to update the amount correctly within the loop.
    
    
    Exercise 5: Print Even Numbers
    Objective: Write a for loop that prints all even numbers from 2 to 20.
    Hint: The increment being used is key.

*
/*
let userInput = prompt("Enter a number");
//parseInt - integer
//parseFloat - decimal
//Number - converts string to number
let num = parseFloat(userInput);//parseFloat
console.log(num);
num = num.toFixed(2); // just keep to 2 decimal places
*/

