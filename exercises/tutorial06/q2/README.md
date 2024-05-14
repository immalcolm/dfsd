# Tutorial 6 Question 2
Consider the following problem:

Ask the user for a string, and then display the count of each alphabet and space in the string, assuming that the user won't key in any punctuation marks or other symbols. The idea is if the user enters the string "apple pie", we will get the following output:
```
a: 1
p: 3
l: 1
e: 2
 : 1
i: 1
```

The order of how the alphabet appears is not important.
We will explore how to use an object to solve this problem. Assume we start off the following code:
`let message = prompt("Please enter something: ");`

#### Q1: Write the code below to create an empty object stored in the variable alphaCount:

#### Q2: Complete the code below, such that if the character stored in the variable alpha is not found as a property inside alphaCount, it will be stored in the alphaCount object as a property with value of 1:
```js
for (let alpha of message) {
  if (____________) {

  alphaCount[ _____ ] = ____________________________
}
```

#### Q3: Add an else to the if part from question 2, such that if alpha exists as a key in alphaCount, its value is increased by 1:
```js
for (let alpha of message) {
  if (....) {
   // this part completed in question 2
   } else {
  alphaCount[________] = alphaCount[________] + 1;
  }
} 
```

#### Q4: Print out on one line for each alphabet in the message string, the number of times it is found.

## References
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)