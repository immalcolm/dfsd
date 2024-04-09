const multipler = 5;
let joAge = 10;
let joHeight = 165;

let friendAge = 15;
let friendHeight = 155;

let joScore = joAge * multipler + joHeight;
let friendScore = friendAge * multipler + friendHeight;
console.log(`Jo Score: ${joScore}`);
console.log(`Friend Score: ${friendScore}`);

if (joScore > friendScore){
  console.log("Jo wins")
}else if(joScore < friendScore){
  console.log("Friend wins");
}else {
  console.log("Draw");
}
//question, do we need to check for draw condition?

//challenge
let enemyAge = 20;
let enemyHeight = 180;
let enemyScore = enemyAge * multipler + enemyHeight;
console.log(`Enemy Score: ${enemyScore}`);

console.log("-----Challenge ----- ")
if((joScore > enemyScore) && (joScore > friendScore)){
  console.log("Jo wins!");
}else if((friendScore > enemyScore) && (friendScore > joScore)){
  console.log("Friend wins!");
}else if((enemyScore > joScore && enemyScore > friendScore)){
  console.log("Enemy wins!");
}else{
  console.log("Draw!");
}
//Question to students
//do we need this condition? 
// else if((joScore === enemyScore) && (joScore === friendScore)){
//  console.log("Draw!");