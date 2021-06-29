const heures = document.getElementById("heures");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const btn = document.getElementById("btnCalcul");
const inputJour = document.getElementById("inputJour");
const secondesParMinutes = 60;
const minutesParHeures = 60;
const heuresParJour = 24;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let jour = inputJour.value;
  let calcHeures = jour * heuresParJour;
  let calcMinutes = calcHeures * minutesParHeures;
  let calcSecondes = calcMinutes * secondesParMinutes;

  heures.innerText = `${calcHeures} Heures`;
  minutes.innerText = `${calcMinutes} Minutes`;
  secondes.innerText = `${calcSecondes} Secondes`;
  return;
});
