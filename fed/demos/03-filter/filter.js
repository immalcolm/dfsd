/*
.filter() lets you:
- Loop through an array
- Return only the items that meet a condition (true)
- Get a new array, leaving the original untouched
*/

//A. Filter numbers
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]


//B. filter users who are active
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false }
];


const result = [1, 2, 3].filter(num => {
  return num > 1; 
});
console.log(result); // [2, 3]


//**To-Do App**
console.log("Use Case: To-Do App");
const todos = [
  { text: "Buy milk", done: true },
  { text: "Code", done: false }
];

const pending = todos.filter(todo => !todo.done);
console.log(pending); // [{ text: "Code", done: false }]
console.log("End to-do app\n");

//**Search Filter**
console.log("Use Case: Search Filter");
// Filter names based on a query
const names = ["Anna", "Ben", "Carl"];
const query = "a";

const query_result = names.filter(name =>
  name.toLowerCase().includes(query.toLowerCase())
);
console.log(query_result); // ["Anna", "Carl"]
console.log("End search filter\n");