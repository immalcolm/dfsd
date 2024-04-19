function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(calculateCircleArea('5'));  // Passing a string instead of a number

/*
Common Mistakes:
Passing the wrong data type to the function.
Forgetting to square the radius (radius * radius or radius ** 2).s

*/