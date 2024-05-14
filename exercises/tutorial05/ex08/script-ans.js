let text = document.querySelector('.text');
let words = document.querySelector('.words');
let characters = document.querySelector('.characters');
let charactersNum = 0;

text.addEventListener('input', function(e) {
  let msg = e.target.value;
  let msgArr = msg.split(' ');
  words.innerText = msgArr.length;

  for (let i = 0; i < msgArr.length; i++) {
    charactersNum += msgArr[i].length;
  }
  characters.innerText = charactersNum;
})

/*
let text = document.querySelector('.text');
let words = document.querySelector('.words');
let characters = document.querySelector('.characters');
let charactersNum = 0;

text.addEventListener('input', function(e) {
  let msg = e.target.value;
  let msgArr = msg.split(' ');
  words.innerText = msgArr.length;

  for (let i = 0; i < msgArr.length; i++) {
    charactersNum += msgArr[i].length;
  }
  characters.innerText = charactersNum;
})
*/
/*
let text = document.getElementById('text')
let words = document.getElementsByClassName('words')
let characters = document.getElementsByClassName('characters')

const counter = () => {
  const w = text.value

  let wordCounter = w.split(" ").filter((x) => (x !== ""))

  characters[0].innerHTML = w.length
  words[0].innerHTML = wordCounter.length
}

document.getElementById('text').addEventListener("input", counter)

*/