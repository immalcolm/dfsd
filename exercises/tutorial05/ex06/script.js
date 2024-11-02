
//1. retrieve all textboxes
//2. retrieve the add button 
//3. add event listener to the add button
//4. decide the action to take when the button is pressed/clicked

const txtFirst = document.getElementById("txt-first");
const txtSecond = document.getElementById("txt-second");
const btnAdd = document.getElementById("btn-add");
const displaySum = document.getElementById("display-sum");
//binding the event listener to the add button 
//with a click listener
//callback function to add the 2 input boxes
btnAdd.addEventListener("click", function(){
    let firstNum = parseInt(txtFirst.value)
    let secondNum = parseInt(txtSecond.value)
    //calculate sum
    let sum = firstNum + secondNum

    displaySum.innerHTML = sum
    //display sum
    //alert(sum)

    //return firstNum + secondNum
});//end of add event listener