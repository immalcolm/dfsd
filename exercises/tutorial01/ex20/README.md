# Exercise 20: PSI

Write a program that asks the user to enter the PSI level **(a floating-point number).**
- If it is equal or above 100, print `"Unhealthy"`
- If it is above 50 but below 100, print `"Moderate"`
- Otherwise, if the PSI is less than 50, print `"Healthy"`

**Note:**
The message in the input function should be "PSI: "

## Example Input
`PSI: 120`

## Correct Output
`Unhealthy`

## References
- parseFloat() parses a string and returns the first number
- We have to use a Number.parseFloat to do a more thorough float check, it returns a NaN value if it is invalid
- [MDN Parse Float](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)