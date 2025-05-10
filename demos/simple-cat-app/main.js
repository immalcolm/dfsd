//https://catfact.ninja/fact
//https://cataas.com/cat

const catBtn = document.getElementById("get-cat");
catBtn.addEventListener("click", updateCat); //call updateCat function

function updateCat() {
  fetch("https://cataas.com/cat")
    .then((response) => response.blob())
    .then((imageBlob) => {
      const imageObjectURL = URL.createObjectURL(imageBlob);
      document.getElementById("cat").src = imageObjectURL;
    });

  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("cat-fact").innerHTML = data.fact;
    });
}
