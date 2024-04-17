console.log("hi PROGRAMMING FUNDAMENTALS 1!");

//let small potatoe = 1 health


//let the right hand side value be the value of the left hand side (variable)
//<<<< assign
var sp = 1;
let smallP = 5;//smallP is worth 5 small potatoes
const POTATOEKING = "Potatoe King";
sp = 10;
smallP = 100;
//POTATOEKING = "Potatoe King";

let bankAccount = 100;

while("AHLONG" === "AHLONG"){
    bankAccount = bankAccount - 5;
}

if(bankAccount > -100){
    bankAccount = bankAccount - 5;
}


let smallPotatoe = 1;
let bigPotatoe = 5; //big potatoe is worth 5 small potatoes

//ship at first has 10small potatoes on top
let ship = 10*smallPotatoe; //10 health
//Ah Long used this combo..
//he throws an if card that says
//if ANY SHIP has less than 5 small potatoes
if(10 < 5*smallPotatoe){
  //deal 2* fry
    ship = 10 - (2*smallPotatoe);
    //new ship will be left with 8 small potatoes
}

//Ah Long has a ship with 7 potatoes
//Ruth has a ship with 4 potatoes... 
while (ship >= 5 * smallPotatoe){ //ah long satisfies the condition
    //deal 1* fry
    ship = ship - smallPotatoe; 
    //new ship will be left with 6 small potatoes
}

//for X number of times deal 1* fry
for(let x = 0; x < 5; x++){
  //deal 1* fry
  ship = ship - smallPotatoe;
  //new ship will be left with 1 small potatoes
}

if(potatoeKing){
    console.log("Potatl King is here!")
    if(lastPersonToShout){

    }
}