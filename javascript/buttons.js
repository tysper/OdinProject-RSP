"use strict";

const startButton = document.querySelector(".start-btn");
const helpButton = document.querySelector(".help-btn");
const backButton = document.querySelector(".back-btn");
const initialScreen = document.querySelector(".main-screen");
const gameScreen = document.querySelector(".start-screen");

startButton.addEventListener("click", (a) => {
  initialScreen.classList.toggle("hidden");
  gameScreen.classList.toggle("hidden");
});

backButton.addEventListener("click", (a) => {
  initialScreen.classList.toggle("hidden");
  gameScreen.classList.toggle("hidden");
});
