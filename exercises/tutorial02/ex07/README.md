# Making Triangle
Objective: Use a for loop to print a triangle pattern of stars (*). The triangle should have 5 rows, with the number of stars increasing by one in each row.

**Explanation**
Outer for Loop: This loop runs from 1 through the number of rows (rows). Each iteration represents a row in the triangle.
Inner for Loop: This loop adds stars (*) to the output string. The number of iterations increases with each outer loop iteration, reflecting the row number and thus increasing the number of stars printed in each subsequent row.
Line Break (\n): After completing each row (i.e., after the inner loop), a newline character is added to move to the next line, thus forming the triangle shape when printed.