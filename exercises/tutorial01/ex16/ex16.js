const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "));
const divider = 2;
let remainder = num % divider;

//we use the triple === for data type comparision too
//what if it ends up a string?
if(remainder === 0){
  console.log(num + " is even");
}else{
  console.log(num + " is odd");
}
