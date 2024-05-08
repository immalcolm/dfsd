/* 
# Printing Diagonal Elements
Objective: Print elements on the diagonal of a square 2D array.

## Instructions:
- For a square matrix (n x n), print elements where the row index equals the column index.
- Discuss how this would change if printing the secondary diagonal.
*/
let squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  
  for (let row = 0; row < squareMatrix.length; row++){
    //for (let col = 0; col< squareMatrix[row].length;col++){
        console.log(squareMatrix[row][row]);
    //}
  }