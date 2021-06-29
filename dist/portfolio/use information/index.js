const firstName = document.getElementById("firstName");
const years = document.getElementById("years");
const city = document.getElementById("city");
const film = document.getElementById("film");
const song = document.getElementById("song");
const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  p.innerHTML += `Bonjour ${firstName.value} si j'ai bien compris tu habites a${city.value} ans tu as ${years.value}
tu aimes ${film.value} et adore écouter ${song.value} .
Ses informations ne seront pas gardées je suis juste un script Javascript créé pour s'entrainer :p`;
});
