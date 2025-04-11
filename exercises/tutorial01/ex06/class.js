//Problem: fix the tax to pay

let taxRate = 2.9; //0.029
let income = 450000;

let taxPercentage = taxRate /100;

let totalPayment = taxRate * 100 * income; //taxPayable

//template literal
console.log(`Tax to pay: ${totalPayment}`);

//not using template literal
console.log("Tax to pay:" + totalPayment
    +" $" + " some other explanation"
    + "something else... " + taxRate
 );