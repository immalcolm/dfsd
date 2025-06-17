# .reduce()
- Loops through the array from left to right
- Uses a callback function to "accumulate" a single final result
- Can be used for numbers, strings, objects, arrays — anything!
```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);
```
Think of .reduce() like a snowball rolling through an array, collecting or combining things as it goes.

**Example:**
You’re counting how much money is in a wallet full of bills.
You start at $0, then add each bill one by one — that’s `.reduce()` in action!

### A. Add up numbers
```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total); // 60
```
- sum is the accumulator
- num is the current item
- 0 is the initial value

### B. Turn an array of strings into a sentence
```js
const words = ["I", "love", "JS"];

const sentence = words.reduce((acc, word) => acc + " " + word);

console.log(sentence); // "I love JS"
```

### C. Count items by category
```js
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 2, orange: 1 }
```

## TL;DR WHEN TO USE .reduce()
| Goal                       | Use `.reduce()`?  |
| -------------------------- | ----------------- |
| Add numbers                | ✅                 |
| Merge array into one thing | ✅                 |
| Count, group, flatten      | ✅                 |
| Transform each item        | ❌ Use `.map()`    |
| Filter items               | ❌ Use `.filter()` |
