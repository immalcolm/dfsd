
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Enter a number: "));
if(num > 0){
  console.log("The number is a positive.")
}else if (num < 0){
  console.log("The number is a negative.")
}else{
  console.log("The number is a zero.")
}
