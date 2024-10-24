/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("evento onload");
};

const palos = ["♦", "♥", "♠", "♣"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const paloUp = document.querySelector("#paloUp");
const cardValue = document.querySelector("#cardValue");
const paloDown = document.querySelector("#paloDown");

function generarPaloAleatorio() {
  return palos[Math.floor(Math.random() * palos.length)];
}

function generarValorAleatorio() {
  return valores[Math.floor(Math.random() * valores.length)];
}

function asignarPaloYValor() {
  const palo = generarPaloAleatorio(); // Generar un solo palo
  const valor = generarValorAleatorio(); // Generar un valor aleatorio

  paloUp.innerText = palo; // Asignar el mismo palo a paloUp
  cardValue.innerText = valor; // Asignar el valor a cardValue
  paloDown.innerText = palo; // Asignar el mismo palo a paloDown

  // Cambiar el color a rojo si el palo es ♦ o ♥
  paloUp.style.color = palo === "♦" || palo === "♥" ? "red" : "black";
  paloDown.style.color = palo === "♦" || palo === "♥" ? "red" : "black";
}

console.log(asignarPaloYValor());
