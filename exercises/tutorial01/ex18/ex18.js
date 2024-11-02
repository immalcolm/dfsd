let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false;
let isJaniceGoing = false;

/*
SHOULD WE GO DOWN TO THE BEACH TODAY?
John, Eve and Adam are thinking about going down to the beach..
They will only go to the beach if the following conditions are met:
- The weather is sunny or the weather is cloudy
- Eve must be going
- It is not a Tuesday
- Eve’s friend Janice is not going
*/
if((isSunnny || isCloudy) && isEveGoing
  && !isTuesday && !isJaniceGoing){
    console.log("let's...go ")
  }else{
    console.log("nope")
  }
 //get the middle element in array 
 //we need to know how big is the array
 //to get exact middle --> array.length/2

 //[1,2,3,4]
 //arr.splice(1, 1) --> remove the middle element

if ( (isSunny || isCloudy) && isEveGoing && !isTuesday) {
  console.log("Going to the beach!");
} else {
  console.log("Not going to the beach!");

}

//do not read into the statements too much  