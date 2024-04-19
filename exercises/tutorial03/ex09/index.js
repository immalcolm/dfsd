function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isOddOrEven(7));  // Outputs: Odd
console.log(isOddOrEven(4));  // Outputs: Even
