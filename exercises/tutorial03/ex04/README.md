# Comparing Numbers and Strings
Objective: Identify the difference between == and === when comparing numbers and strings.

## Instructions:
- Compare a number and a string with the same value using == and ===.
- Print both results to observe the difference.

## Discussion Points:
- Explain why == returns true (type coercion occurs, converting the string to a number).
- Discuss why === returns false (no type coercion, types are different).

## References
- [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

## Reading

Type coercion in JavaScript is a powerful and sometimes confusing behavior where the engine automatically converts a value from one type to another (such as converting a string to a number, an object to a boolean, etc.) when executing code. This automatic conversion can occur in various expressions and statements where JavaScript expects a particular type.

**How Type Coercion Works**
JavaScript is a loosely typed or a dynamically typed language, which means you don't need to declare the type of a variable ahead of time, and data types can be automatically converted as needed during script execution. Here’s how type coercion typically works in various scenarios:

**1. String Coercion**
When an operation involves a string and another type, the non-string value is often converted to a string:


2. Numeric Coercion
When you use arithmetic operations or other expressions that expect numbers, JavaScript tries to convert the values to numbers:
```js
console.log('5' - 3);  // 2
console.log('5' + 3);  // "53" (exception because + is also the string concatenation operator)
console.log('five' * 2);  // NaN (Not a Number - because 'five' cannot be converted to a number)
console.log(true * 10);  // 10 (true is converted to 1, and 1 * 10 is 10)
```

3. Boolean Coercion
JavaScript often converts other data types to booleans in logical operations or in contexts that require a boolean, like conditions in if statements:
```js
if ("hello") {  // "hello" is truthy
    console.log("This string is considered true because it's non-empty.");
}
if (0) {  // 0 is falsy
    console.log("This line won't execute because 0 is considered false.");
}

```

## Why Type Coercion Matters
Type coercion can lead to unexpected results if not properly understood. It's especially important to be aware of how values of different types are handled in comparisons, logical operations, and when converting values. Misunderstanding how type coercion works can lead to bugs and errors in code logic. Therefore, knowing when and how JavaScript converts types is crucial for writing robust and reliable JavaScript code.