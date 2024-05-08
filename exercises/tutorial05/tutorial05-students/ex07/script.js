//
/*
to start with q1. we can
getElementsByClassName
querySelectorAll
think about live nodelist and static node lists (refer to slide deck)
run a loop
in the loop
--> modify the className to cool
*/
//console.log("hi");

//Write code using a loop to select only the elements with the class li.hot and change all the class attributes of the elements to cool.

let hot = document.querySelectorAll(".hot");
//let hot = document.getElementsByClassName("hot");

console.log(`Number of hot ${hot.length}`);

for(let i = 0; i< hot.length;i++){
    hot[i].classList.add("cool");
    hot[i].classList.remove("hot");
   
}