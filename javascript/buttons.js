"use strict";

const startButton = document.querySelector(".start-btn");
const helpButton = document.querySelector(".help-btn");
const backButton = document.querySelector(".back-btn");
const initialScreen = document.querySelector(".main-screen");
const gameScreen = document.querySelector(".start-screen");
const closeBtn = document.querySelector(".");

startButton.addEventListener("click", (a) => {
  gameScreen.scrollIntoView({ behavior: "smooth", block: "center" });
});

backButton.addEventListener("click", (a) => {
  initialScreen.scrollIntoView({ behavior: "smooth", block: "center" });
});
