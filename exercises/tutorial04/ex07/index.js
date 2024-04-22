let inventory = [
    ["Apples", 1.50, 30],
    ["Oranges", 1.25, 50],
    ["Bananas", 0.75, 85]
  ];
  
  // Sell 15 apples
  inventory[0][2] -= 15;
  
  // Print updated inventory
  console.log("Updated Inventory:");
  inventory.forEach(item => {
    console.log(`Product: ${item[0]}, Price: $${item[1]}, Quantity: ${item
  