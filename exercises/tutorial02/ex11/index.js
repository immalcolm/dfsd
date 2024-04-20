// Step 1: Start with a given string
let originalString = "hello";

// Step 2: Create a new string for the reversed version
let reversedString = "";

// Step 3: Use a for loop to reverse the string
for (let i = originalString.length - 1; i >= 0; i--) {
    // Step 4: Append the current character to the new string
    reversedString += originalString[i];
}

// Step 5: Print the reversed string
console.log("Reversed string is:", reversedString);
