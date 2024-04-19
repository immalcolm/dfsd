function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

console.log(findLargest(4, '4'));  // Incorrect comparison due to type mismatch
