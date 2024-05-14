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
  hotList.className = "cool";
}


// Task 2 TODO
const hotList2 = document.getElementsByClassName('hot');
if (hotList2.length >= 3) {
  hotList2[2].className = "cool";
}


// Task 3
const hotList3 = document.getElementsByTagName('li')
if (hotList3.length > 0) {
  hotList3[0].className = "cool";
}

/*
console.log(hotList)
console.log(hotList.className)


console.log(hotList2)
console.log(hotList2[0].className)
console.log(hotList2[1].className)
console.log(hotList2[2].className)
console.log(hotList2[3].className)


console.log(hotList3)
console.log(hotList3.className)
console.log(hotList3[0].className)
console.log(hotList3[1].className)
*/