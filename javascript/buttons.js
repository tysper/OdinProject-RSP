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

// ====FUNCTIONS =====
function toggleClass(className, elementsList) {
  elementsList.forEach((x) => {
    x.classList.toggle(`${className}`);
  });
  return elementsList;
}

function playSound(soundURL) {
  const audio = new Audio(soundURL);
  audio.play();
  return audio;
}
// ====EVENT LISTENERS ====
startButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToGame", screens);
  playSound("../sounds/button-sound.mp3");
});

backButton.addEventListener("click", (a) => {
  toggleClass("scrollToGame", screens);
  toggleClass("scrollToMain", screens);
  playSound("../sounds/button-sound.mp3");
});

backButtonHelp.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  playSound("../sounds/button-sound.mp3");
});

helpButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToHelp", screens);
  setTimeout(() => {
    toggleClass("scrollToHelp", screens);
  }, 300);
  playSound("../sounds/button-sound.mp3");
});

// ====INITIAL CONFIG ====
setTimeout(() => {
  loadingScreen.classList.add("hidden");
}, 3000);

toggleClass("scrollToMain", screens);
