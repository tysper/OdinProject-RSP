"use strict";

// ====BUTTONS =====
const loadingScreen = document.querySelector(".loading");
const startButton = document.querySelector(".start-btn");
const helpButton = document.querySelector(".help-btn");
const backButton = document.querySelector(".back-btn");
const backButtonHelp = document.querySelector(".back-btn-help");

// ====SCREENS =====
const initialScreen = document.querySelector(".main-screen");
const gameScreen = document.querySelector(".start-screen");
const helpScreen = document.querySelector(".help-screen");
const screens = [helpScreen, initialScreen, gameScreen];

//  ====FILES ====
const buttonSound = new Audio("../sounds/button-sound.mp3");
buttonSound.preload = "metadata";

// ====FUNCTIONS =====
function toggleClass(className, elementsList) {
  elementsList.forEach((x) => {
    x.classList.toggle(`${className}`);
  });
  return elementsList;
}

// ====EVENT LISTENERS ====
startButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToGame", screens);
  buttonSound.play();
});

backButton.addEventListener("click", (a) => {
  toggleClass("scrollToGame", screens);
  toggleClass("scrollToMain", screens);
  buttonSound.play();
});

backButtonHelp.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  buttonSound.play();
});

helpButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToHelp", screens);
  setTimeout(() => {
    toggleClass("scrollToHelp", screens);
  }, 300);
  buttonSound.play();
});

// ====INITIAL CONFIG ====
setTimeout(() => {
  loadingScreen.classList.add("hidden");
}, 3000);

toggleClass("scrollToMain", screens);
