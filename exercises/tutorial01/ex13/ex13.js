let x = 5;
let y = 10;
let z = x;
x = y;
y = z;
console.log(`Using temp variable`);
console.log("After swapping: x =", x, ", y =", y);

//---------
//advanced
console.log(`\nUsing no temp variable`);
let a = 5;
let b = 10;

// Swapping
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a =", a, ", b =", b);
