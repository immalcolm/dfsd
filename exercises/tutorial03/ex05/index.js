const prompt = require('prompt-sync')();

//
//camelCaseIsSuperMan
 
//what's the width or height

let width = 10;
let height = 5;

function calculateAreaRect(aWidth =10 ,aHeight = 10){
    let area = aWidth * aHeight;
    console.log(`area: ${area}`);
    return area;
    console.log("I am here");
}
console.log(calculateAreaRect()); //10x10
console.log(calculateAreaRect(123)); //123x10
console.log(calculateAreaRect(888,777));//888x777


let userWidth = parseInt(prompt("Enter width: "));
let userHeight = parseInt(prompt("Enter height: "));
//integer?
if(userWidth && userHeight){
   let area = calculateAreaRect(userWidth, userHeight);
   console.log(`Area: ${area}`);
    newArea = area *2;

}

if(userWidth > 0 && userHeight > 0){
    console.log(calculateAreaRect(userWidth, userHeight));
}


function calculateArea(width, height) {
    return width * height;
}

console.log("Area: " + calculateArea(5, 3));  // Outputs: Area: 15
