let array2D = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
  ];
  
  let totalSum = 0;
  for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
      totalSum += array2D[i][j];
    }
  }
  
  console.log("Total Sum:", totalSum);
  