# Understanding `.find()`

- Loops through an array
- Runs a callback function on each item
- **Returns the first item** that makes the callback return true
- If no item matches, it returns `undefined`

Basically saying, “Give me the first match you can find.”

### Template

```js
const result = array.find((item, index, array) => {
  return condition;
});
```

## A. Find a number

```js
const numbers = [1, 4, 7, 10];
const firstBig = numbers.find((num) => num > 5);

console.log(firstBig); // 7
```

## B. Find a user by name

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Bob" },
];

const firstBob = users.find((user) => user.name === "Bob");

console.log(firstBob);
// { id: 2, name: "Bob" } – only the first one!
```

## COMMON PITFALLS + FIXES

### ❌ 1. Assuming it gives all matches

```js
const nums = [1, 2, 3, 2];
const match = nums.find((n) => n === 2);
console.log(match); // 2 – not all 2s!
```

✅ Use `.filter()` if you want all matches.

### ❌ 2. Thinking it returns the index — it returns the item

```js
const items = ["a", "b", "c"];
const found = items.find((x) => x === "b");

console.log(found); // "b" ✅
```

✅ Use `.findIndex()` if you want the position.

### ❌ 3. Not handling undefined

If no item matches, `.find()` returns undefined.

```js
const people = ["Anna", "Brian"];
const person = people.find((p) => p === "Carl");

console.log(person); // undefined ❗
```

**✅ Always check:**

```js
if (person) {
  console.log("Found:", person);
} else {
  console.log("Not found!");
}
```

## Guide

| **Goal**              | **Use this**    |
| --------------------- | --------------- |
| First match only      | `.find()` ✅    |
| All matching items    | `.filter()` ✅  |
| Want transformed list | `.map()` ✅     |
| Just loop to do stuff | `.forEach()` ✅ |

## Reference

- [MDN Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [JS Array Method: Find. Video Example](https://www.youtube.com/watch?v=t9Hw86Vc-gU)
- [Array 'find' method in JavaScript (Array.prototype.find) - JavaScript Tutorial For Beginners - Video](https://www.youtube.com/watch?v=N1QcR8F3xFY)
