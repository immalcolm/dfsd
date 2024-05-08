let matrix = [
    [1, 2, 3],
    [4, 5, 6,84,49,39],
    [7, 8, 9]
  ];

  for(let l = 0; l < 10; l++){
    //series of statements
    console.log(l);
    console.log(l);
    console.log(l);
    console.log(l);
  } 
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(`Element at [${row}][${col}]: ${matrix[row][col]}`);
    }
  }
  