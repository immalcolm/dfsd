# Simple Express with Goals API


## Spread Operator `(...)`
The spread operator `(...)` in JavaScript is used to expand the elements of an iterable (like an array or object) into individual elements or properties.

**// Example with objects**
```js
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26, city: 'New York' };
// updatedUser: { name: 'Alice', age: 26, city: 'New York' }

// Example with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
// moreNumbers: [1, 2, 3, 4,5]
```