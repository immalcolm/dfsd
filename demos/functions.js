
//2D arrays 
//define a 2D array

//2D array const arr = [][]
let arr = [
    [1, 2, 3], //first row 
    [4, 5, 6], //second row
    [7, 8, 9] //third row
]

console.log(`first row first value ${arr[0][0]}`); //1

console.log(`third row third value ${arr[2][2]}`); //9

for (let row = 0; row < arr.length; row++){//number of rows (external loop)
    for(let col = 0; col < arr[row].length; col++){ 
        console.log(`row ${row} col ${col} value ${arr[row][col]}`);
    }
}

//basic function 
function printName(){
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");   
}

//call function
printName();
//Hello World 
//Hello World
//Hello World
//Hello World
//Hello World

//@param name --> accepts a string value
function printName(name){
    //name is our parameter aka local variable
    console.log(`Hello ${name}`);
}

//call function
printName("Andrew"); 
//output: Hello Andrew

function printNameV2(name = "John Doe"){
    console.log(`Hello ${name}`);
}

//call function
printNameV2(); //Hello John Doe
printNameV2("Andrew"); //Hello Andrew

function printNameV3(name = "John Doe", age = 0){
    console.log(`Hello ${name}`);

    const dogAge = age*7; //convert to dog years
    console.log(`Dog actual age is  ${dogAge} years old`);

    return dogAge;
}

//call function
const dogAge = printNameV3("Max",5); 
//Hello Max
//Dog actual age is  35 years old

/*
8:20pm. 
We go thru the 3 qns 
Tutorial 2: 1,2, 9
Do SUBMIT your answers to the chat
*/