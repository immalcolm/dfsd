
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// It is similar to filter(), but instead of returning an array, it returns the first matching
// element or undefined if no match is found.
// It is useful when you want to find a single item in an array based on a condition
// and you don't need all matching items.


// Example: Using find() to get the first odd number > 5
console.log("Use Case: Find First Odd Number Greater Than 5");
const numbers = [1, 4, 7, 10];
const firstBig = numbers.find(num => num > 5);
console.log(firstBig); // 7

// Example: Using find() to get the first user with name "Bob"
// Note: find() returns the first match, not all matches
// If you want all matches, use filter() instead.
// If you want to find the first user with a specific name, use find().
console.log("\n Use Case: Find First User with Name 'Bob' with an Array of Objects. Returns Object");
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Bob" }
];


const firstBob = users.find(user => user.name === "Bob");

//return only the text of the first user with name "Bob"
const firstBobText = users.find(user => user.name === "Bob").name;

console.log(firstBob);
// { id: 2, name: "Bob" } – only the first one!