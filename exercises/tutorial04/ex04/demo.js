/*
# Sum of All Elements in a 2D Array
Objective: Calculate and print the sum of all elements in a 2D array.

## Instructions:
- Use nested loops to iterate through the array and sum all the elements.
*/

//1D array
let d_array = [0,3,4,5];
let sum = 0;
for(let i =0; i < d_array.length;i++){
    sum += d_array[i]; //sum = sum + d_array[i] 
}
//2D 
let d_array2 = [
    [3,4,5,6], //row 1 ... iterate all the elements in row 1 sum it up. // row =0
    [5,1,3,6]  //row 2 ... iterate all the elements in row 1 sum it up. // row = 1
]
let totalSum = 0;
for(let row = 0;  row < d_array2.length; row++){
    console.log(`Current Row: ${row} | Current Col: ${col}`)
    for(let col = 0; col <d_array2[row].length;col++){
        totalSum += d_array2[row][col];
    }
}
