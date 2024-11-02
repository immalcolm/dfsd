let arr = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
arr.pop();
console.log(arr)
arr.push("Hello");
console.log(arr)

console.log(arr.length)
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let list = [];
list[0] = "Hello";
//list[1] --> undefined.. 

list[26] = "World";
for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}
console.log(list.length);
