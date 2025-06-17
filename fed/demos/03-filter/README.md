# .filter()
`.filter()` lets you:
- Loop through an array
- Return only the items that meet a condition (true)
- Get a new array, leaving the original untouched
- `.filter()` checks every item, even after finding matches. If you just want the first match, use .find().

Imagine you have a basket of apples and you only want the red ones. `.filter()` goes through every apple, checks if it’s red, and builds a new basket of only red apples 🍎.

```js
const result = array.filter((item, index, array) => {
  return condition;
});
```

//A. Filter numbers
```js
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

//B. filter users who are active
```js
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: "Alice", active: true }]
```

## ❌ 1. Forgetting to return inside {}
If you use {} in an arrow function, you MUST use return.

```js
const result = [1, 2, 3].filter(num => {
  num > 1; // ❌ Nothing returned
});

console.log(result); // []
```

### ✅ Fix: Add return
```js
const result = [1, 2, 3].filter(num => {
  return num > 1; // ✅ Works now
});
```

### ✅ Or remove {} for one-liner
```js
const result = [1, 2, 3].filter(num => num > 1);
```


## ❌ 2. Returning falsy/truthy values by accident
```js
const arr = [0, 1, 2, 3];
const result = arr.filter(x => x); // ✅ Filters out 0 because it's falsy
console.log(result); // [1, 2, 3]
```

🧠 If you use `.filter(x => x)`, it keeps only truthy values — sometimes that’s what you want, sometimes not!

## ❌ 3. Expecting .filter() to modify the original array
```js
const nums = [1, 2, 3];
nums.filter(n => n > 1);
console.log(nums); // [1, 2, 3] — ❌ still unchanged
```

### ✅ Fix: Store the result in a new variable
```js
const filtered = nums.filter(n => n > 1);
```

# Cheat Sheet
| ✅ DOs                         | 🚫 DON’Ts                                   |
| ----------------------------- | ------------------------------------------- |
| Use `return` inside `{}`      | Forget to return                            |
| Store result in a new array   | Expect it to change the original array      |
| Return a true/false condition | Return random values or objects             |
| Use for selecting items       | Use for transforming (use `.map()` instead) |

# Use Case
**To-Do App**
```js
const todos = [
  { text: "Buy milk", done: true },
  { text: "Code", done: false }
];

const pending = todos.filter(todo => !todo.done);
```

**Search Filter**
```js
const names = ["Anna", "Ben", "Carl"];
const query = "a";

const result = names.filter(name =>
  name.toLowerCase().includes(query.toLowerCase())
);

```