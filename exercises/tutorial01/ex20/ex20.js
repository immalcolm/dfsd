const prompt = require("prompt-sync")();
let status = "";

let psi = prompt("Enter PSI: ");

if (Number.isNaN(Number.parseFloat(psi))) {
  status = "Error in Input";
} else {
  psi = Number.parseFloat(psi);
  if (psi >= 100) {
    status = "Unhealthy 😶‍🌫💨";
  } else if (psi >= 50 && psi < 100) {
    status = "Moderate 💭☁️";
  } else if (psi >= 0 && psi < 50) {
    status = "Healthy 😎";
  } else {
    status = "Numbers should be positive!!! ";
  }

}
console.log(`Staus: ${status}`);
