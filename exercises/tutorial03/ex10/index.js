function calculator(operand1, operand2, operator) {
    switch (operator) {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1 * operand2;
        case '/': return operand2 !== 0 ? operand1 / operand2 : "Cannot divide by zero";
        default: return "Invalid operator";
    }
}

console.log(calculator(10, 5, '*'));  // Outputs: 50
console.log(calculator(10, 0, '/'));  // Outputs: Cannot divide by zero
