const numbers = [5, 10, 15, 20];

// 1. Create a new array with numbers tripled
// 2. Filter numbers greater than 10
// 3. Sum all numbers using reduce

console.log("Use Case: Quick Exercise 01");
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [15, 30, 45, 60]

const filtered = tripled.filter(num => num >10);
console.log(filtered); // [15, 30, 45, 60]

const sum = filtered.reduce((acc, num) => acc + num, 0);
console.log(sum); // 105
console.log("\nEnd Quick Exercise 01\n");