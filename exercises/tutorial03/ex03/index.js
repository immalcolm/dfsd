function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseSingleArray(arr){
    let length = arr.length;
     // Calculate the midpoint
     let midpoint = Math.floor(arr.length / 2);

     // Loop from the start of the array to the midpoint
     for (let i = 0; i < midpoint; i++) {
         // Calculate the index of the mirrored element from the end
         let oppositeIndex = arr.length - 1 - i;
 
         // Swap elements using destructuring assignment
         [arr[i], arr[oppositeIndex]] = [arr[oppositeIndex], arr[i]];
         console.log(`Iteration ${i + 1}:`, arr);
     }
 
     return arr;
}

function reverseArray3(arr) {
    let originalLength = arr.length;  // Store the original length of the array

    for (let i = 0; i < originalLength; i++) {
        arr.unshift(arr.pop());  // Pop the last element and unshift it to the start
    }

    return arr;
}

function reverseArray2(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;

}
//push() - add element to the end of the array
//pop() - remove element from the end of the array
//unshift() - add element to the beginning of the array
//shift() - remove element from the beginning of the array




//arr = reverseArray([1, 2, 3, 4, 5]);
arr = reverseArray3([1, 2, 3, 4, 5]);
console.log(arr);

