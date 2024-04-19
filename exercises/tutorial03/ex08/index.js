function calculateInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

let interest = calculateInterest(1000, 5, 3);
console.log(`Interest: $${interest}`);  // Outputs: Interest: $150
