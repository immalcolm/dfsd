function addNumbers(a, b) {
    var sum = a + b;
    console.log(sum);
}

addNumbers(10, '20');  // Incorrectly prints "1020" instead of 30

/*
function addNumbers(a, b) {
    var sum = Number(a) + Number(b);
    return sum;
}

console.log(addNumbers(10, '20'));  // Now correctly outputs 30

*/