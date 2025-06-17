
//Total shopping cart cost
console.log("Example: Total Shopping Cart Cost");
// Use reduce() to calculate the total price of items in a shopping cart
const cart = [
  { item: "Book", price: 10 },
  { item: "Pen", price: 2 }
];

const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total); // 12

// Group data
console.log("\nExample: Grouping Data by Role");
const people = [
  { name: "Anna", role: "dev" },
  { name: "Ben", role: "designer" },
  { name: "Cara", role: "dev" }
];

const grouped = people.reduce((acc, person) => {
  acc[person.role] = acc[person.role] || [];
  acc[person.role].push(person.name);
  return acc;
}, {});

console.log(grouped);
// { dev: ["Anna", "Cara"], designer: ["Ben"] }