const prompt = require('prompt-sync')();

let arr = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(`The sum of the array is ${sum}`);