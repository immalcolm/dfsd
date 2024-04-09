# Exercise 21
A muffin costs X dollars and Y cents.The user wants to buy Z muffins.

Write a program that asks the user to enter the value for these three variables: `X`, `Y`, `Z`

For example: if X=1 and Y=90, then this means the muffin each cost $1.90

If X=3 and Y=0 then this means each muffin costs $3.00.

For the case if each muffin costs $1.90 (which means X is 1, and Y is 90), if we buy 6, then the total cost will be $11.40. It means it will cost 11 dollars and 40 cents.

If we buy 10 muffins, then the output will be 19 dollars and 0 cents.
Calculate how much it will cost to buy Z muffins. 
Display the total in dollars and cents.

**Test Cases**
```
> 1
> 90
> 6
Total cost of 6 muffins is $11 and 40cents ($11.40)
```
```
> 1
> 90
> 10
19.00
Total cost of 10 muffins is $19 and 0cents ($19.00)
```

## References
- [Number.parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
- [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)