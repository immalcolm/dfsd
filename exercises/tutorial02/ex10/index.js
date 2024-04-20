// Step 1: Initialize an array with several numbers
let numbers = [5, 17, 2, 88, 33, 25];

// Step 2: Assume the first element is the largest for start or set to a very small number
let largest = numbers[0];  // Start with the first element

// Step 3: Use a for loop to traverse the array
for (let i = 1; i < numbers.length; i++) {  // Start with the second element
    // Step 4: Check if the current element is larger than the currently stored largest number
    if (numbers[i] > largest) {
        largest = numbers[i];  // Update largest with the current element if it's larger
    }
}

// Step 5: Print the largest number
console.log("The largest number in the array is:", largest);
