let principal = 1000; // initial amount
let rate = 5; // interest rate of 5%
let time = 0; // time in years
let amount = principal;

while (amount < 2 * principal) {
    console.log(`Year ${time}: ${amount}`);
    amount += amount * (rate / 100);
    time++;
}
console.log(`It takes ${time} years to double the principal amount.`);