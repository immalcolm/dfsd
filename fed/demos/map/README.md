# Map function
.map() is an array method that:
- Creates a new array
- Applies a callback function to each element of the original array
- Does not change the original array
  
```js
const newArray = originalArray.map((element, index, array) => {
  // return something for new array
});
```

Think of .map() like a factory line. You give it an array of items, and it transforms each item one by one, sending the new version to a new box (array).

For example:
You have numbers: `[1, 2, 3]`
You want to double each number: `[2, 4, 6]`

You use `.map()` to say:
➡️ "Take each number, double it, and give me a new array."

## Difference between `.map()` and `.forEach`

| Feature                  | `.map()`                            | `.forEach()`                           |
| ------------------------ | ----------------------------------- | -------------------------------------- |
| **Creates a new array?** | ✅ Yes                               | ❌ No                                   |
| **Returns a value?**     | ✅ Returns the new transformed array | ❌ Returns `undefined`                  |
| **Used for...**          | Transforming data (pure)            | Performing side effects (e.g. logging) |


## When to use

| Goal                              | Use            |
| --------------------------------- | -------------- |
| Create a new array from existing? | `.map()` ✅     |
| Just do something (e.g. console)? | `.forEach()` ✅ |


**`.map()`:**
- Used when you want to transform each item in the array.
- Returns a new array with the results of applying a function to every element.

**`.forEach()`:**
- Used when you want to do something with each item, like logging or saving to a database.
- Does not return anything useful — it just loops through.

Think of `.map()` as a copy machine that edits:
“Give me a new version of each item.”

Think of `.forEach()` as a worker following instructions:
“Go through this list and do something, but don’t keep any result.”