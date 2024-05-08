//test part by part when we code
/*
1. retrieve box 1 value
2. retrieve box 2 value
3. attach event listener to button 
4. retrieve values only when button is click
5. write logic to calculate values
6. perform error checking if needed
*/

let calculateBtn = document.getElementById("calculateBtn");

//attach event listener to calculate button
calculateBtn.addEventListener("click", function (e) {

  let box1Value = parseInt(document.getElementById("box1").value);
  let box2Value = parseInt(document.getElementById("box2").value);

  let sum = box1Value + box2Value;
  let sumMsg = document.getElementById("sum");
  sumMsg.innerText = `The Total sum value: <b>${sum}!</b>`;
  alert(`The Total sum value: <b>${sum}!</b>`);
  console.log(`Total value is: ${sum}`);
});

console.log(box1Value);
