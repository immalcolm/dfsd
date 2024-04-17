let rows = 5;
let output = '';
for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
        output += '*';
    }
    output += '\n'; // Move to the next line after each row is printed
}
console.log(output);

/*
Explanation
Outer for Loop: This loop runs from 1 through the number of rows (rows). Each iteration represents a row in the triangle.
Inner for Loop: This loop adds stars (*) to the output string. The number of iterations increases with each outer loop iteration, reflecting the row number and thus increasing the number of stars printed in each subsequent row.
Line Break (\n): After completing each row (i.e., after the inner loop), a newline character is added to move to the next line, thus forming the triangle shape when printed.
*/