

//Logging to console
const names = ["Alice", "Bob", "Cara"];
names.forEach(name => console.log(`Hello, ${name}!`));


//Updating External Variables
let total = 0;
const prices = [10, 20, 30];

prices.forEach(price => {
  total += price;
});

console.log(total); // 60