let array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 10, 9]
  ];
  
  for (let i = 0; i < array2D.length; i++) {
    let maxInRow = array2D[i][0];
    for (let j = 1; j < array2D[i].length; j++) {
      if (array2D[i][j] > maxInRow) {
        maxInRow = array2D[i][j];
      }
    }
    console.log(`Largest number in row ${i} is ${maxInRow}`);
  }
  