
//declare variables
//3 key ways to declar variables
var number = 0; 
//re-declaration . ONLY "var" allows re-declaration
var number = "iosjdifos"; //declaring a variable

let day = "Saturday"; //declaring a variable
day = 1;//re-assignment value
day = ["Monday","Tuesday", "Wednesday"];//re-assignment value
day = [function(a,b){return a+b }, 1]

//we won't want to change CONSTANTS
const userA = "John" //declaring a constant variable
const pi = 3.14;

//template literal
//help you to format strings better and display 
//in a more readable way
let traditionalName = "My name is" + userA + "..... " 
let myName = `My name is ${userA} and I am born on... on`

let simpleArr = [1,2,3]

//simple loops 
//for (base counter; counter < "array length"; iterator){}
 counter++;//for loop 
for (let counter = 0; counter < simpleArr.length; counter++){
    console.log(simpleArr[counter])
}

let counter = 0;
while(counter < simpleArr.length){
    console.log(simpleArr[counter])
   
    if(counter > 2){
        break;
    }
    counter++;
}

//for of loop
//let simpleArr = [1,2,3]
for(let item of simpleArr){
    console.log(item);
}

//function functionName (argument1, argument2 = defaultValue)
function multiply(number1, number2 ){


    return number1 * number2;
}

let result = multiply(2,3);



function add(a, b) {
    let day = 0;
}






/*Q11. Implement a function product(array) that 
returns the product of all values in array,
which is an array of numbers. [10 marks]
Arguments
1. `array` (Array): Array of numbers.
Returns
(Number): Returns the product of the values in `array`.
Examples
product([4, 2, 8, 6]); // => 384
product([1, 2, 3, 4]); // => 24
product([2, -1, 3]); // => -6
The function should return 1 if array is empty.
product([]); // => 1
*/
function product(arr){
    let result = 1;
    if(arr.length === 0){
        return result;
    }
    for(let i = 0; i< arr.length;i++){
        result *= arr[i];
    }
    return result;
}
console.log(product([4, 2, 8, 6]))



/*

Q12. Create a function countOddNumbers that takes 
an array of numbers and returns the
count of odd numbers. [8 marks]
console.log(countOddNumbers([1, 2, 3, 4, 5, 6])); // Should return 3
*/
//let arr = ["3", "4",4.5,3, 5]

function countOddNumber(arr){
    let count = 0;
    if(arr.length === 0){
        return count;
    }
    for(let i = 0; i< arr.length; i++){
        
        if(arr[i] % 2 !== 0){
            //do something about it 
            //increment our count 
            count++;
        }
    }
    return count;
}
console.log(countOddNumbers([1, 2, 3, 4, 5, 6]));