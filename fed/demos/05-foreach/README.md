# .forEach()
- Executes a callback function once for each element in an array
- Does not return anything
- Used to perform side effects like logging, modifying things outside the array, or calling other functions

```js
array.forEach((element, index, array) => {
  // do something
});
```

Think of `.forEach()` like a helper walking down a list. 
For every item, it follows your instructions — but it doesn’t build or return a new list.

You say: 
>“Tell each student to stand up.”
>
>`.forEach()` walks by and says: “Stand up! Stand up! Stand up!”


## Examples
### A. Logging each item
```js
const colors = ["red", "blue", "green"];

colors.forEach(color => {
  console.log(color);
});
```

### B. Logging with index
```js
colors.forEach((color, index) => {
  console.log(index + ": " + color);
});
```

### C. Pushing to another array
```
const nums = [1, 2, 3];
const squared = [];

nums.forEach(num => {
  squared.push(num * num);
});

console.log(squared); // [1, 4, 9]
```

## Common Pitfalls
## ❌ 1. Expecting .forEach() to return a new array
```js
const result = [1, 2, 3].forEach(n => n * 2);
console.log(result); // ❌ undefined
```
✅ Fix: Use `.map()` if you need to return a new array.

```js
const result = [1, 2, 3].map(n => n * 2); // ✅ [2, 4, 6]
```

## ❌ 2. Trying to stop or break out of .forEach()
```js
[1, 2, 3].forEach(n => {
  if (n === 2) break; // ❌ SyntaxError!
});
```
✅ Fix: Use a for loop or `.some()` / `.find()` if you need early exit.


## ❌ 3. Modifying the array you're looping through
This can lead to confusing bugs.

```js
const arr = [1, 2, 3];
arr.forEach((val, i) => {
  if (val === 2) arr.splice(i, 1); // ❗ risky
});
```
✅ Best to avoid changing the array you're looping.

## When to Use `.forEach()`
| Goal                       | Use `.forEach()`?                         |
| -------------------------- | ----------------------------------------- |
| Do something for each item | ✅ YES                                     |
| Return a new array         | ❌ NO – use `.map()`                       |
| Keep some items            | ❌ NO – use `.filter()`                    |
| Need to exit early         | ❌ NO – use `for`, `.find()`, or `.some()` |
