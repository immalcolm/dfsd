//A.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

//B.
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 },
];

const names = users.map(user => user.name); //basically saying "for each user, return the name"
console.log(names); // ["Alice", "Bob"]

//C.
//mark all products as available
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

//use the spread operator to create a new array with the same objects but with an additional property
//property: available set to true
/* 
Imagine you have a list of items (like products in a store), 
and you want to add a new sticker on each one that says "Available".
But instead of drawing on the original product, you make a copy, 
then stick on the new label.
*/
const updated = products.map(p => ({ ...p, available: true }));
console.log(updated);
// [
//   { id: 1, name: "Laptop", available: true },
//   { id: 2, name: "Phone", available: true }
// ]

