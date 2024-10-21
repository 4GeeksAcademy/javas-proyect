/* eslint-disable */

window.onload = function() {
  //write your code here
  const indexWho = Math.floor(Math.random() * who.length);
  const indexAction = Math.floor(Math.random() * action.length);
  const indexWhat = Math.floor(Math.random() * what.length);
  const indexWhen = Math.floor(Math.random() * when.length);

  const excuseRandom = `${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]}`;

  //Cambiamos el id excuse del html
  document.getElementById("excuse").innerText = excuseRandom;
};

//Variables con los strings
let who = ["Mi perro", "Jose", "Luis", "La clase 84"];
let action = ["se ha comido", "escondió", "destruyo", "me hizo chantaje con"];
let what = ["mi proyecto de excusas", "mi Ford Mustang", "mi tarjeta gráfica"];
let when = [
  "mientras veía One Piece",
  "mientras dormía",
  "mientras estudiaba Javascript",
  "durante una carrera de caracoles",
  "durante Eurovisión",
];
