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

// Task 1
// Get a NodeList of all li.hot elements
const hotList = document.querySelectorAll('li.hot');
// Change the class attributes with a loop
for (let i of hotList) {
    console.log(hotList[i].innerHTML);
  //hotList.className = "cool";
}

