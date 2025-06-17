//Arrow functions are a shorter syntax for writing function expressions introduced in ES6.
/* 
- They do not have their own this context — they inherit this from their enclosing scope.
- You cannot use new with them (they’re not constructor functions).
- They automatically return a value if there’s no {} block.
*/
const add = (a, b) => a + b; // Arrow function with implicit return

//Scenario: given the parameter name, return a greeting message
//typical function
function greet(name) {
    return `Hello, ${name}!`;
}
// Arrow function equivalent
const greetArrow = (name) => `Hello, ${name}!`;


//basic usage
//A.
//regular function 
function square(x) {
    return x * x;
}
// Arrow function equivalent
const squareArrow = (x) => x * x;

//B.
//with multiple parameters
function multiply(a, b) {
    return a * b;
}
// Arrow function equivalent
const multiplyArrow = (a, b) => a * b;

//C.
//with a code block (must use return)
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// Arrow function equivalent
const sumArrayArrow = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};