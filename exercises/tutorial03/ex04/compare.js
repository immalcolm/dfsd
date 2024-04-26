let num1 = 1;
let num2 = "1"; //


if(num1 == num2) {
    console.log("num1 and num2 are equal");
}

//comparision of the data type and value
if(num1 === num2) {
    console.log("num1 and num2 are strictly equal");
}

//parameter
function printTable (num, runLoop = false){
    if(runLoop){
        for(let i = 0; i < num; i++){
            console.log("Table of " + num);
        }
    }
    
}
let userInput = prompt("enter a number");

printTable(10, true);
printTable(10);
