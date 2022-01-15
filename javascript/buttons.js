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

// =====FILES =====
const buttonSound = new Audio("../sounds/button-sound.mp3");

// ====FUNCTIONS =====
function toggleClass(className, elementsList) {
  elementsList.forEach((x) => {
    x.classList.toggle(`${className}`);
  });
  return elementsList;
}

function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
  return audio;
}
// ====EVENT LISTENERS ====
startButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToGame", screens);
  playButtonSound();
});

backButton.addEventListener("click", (a) => {
  toggleClass("scrollToGame", screens);
  toggleClass("scrollToMain", screens);
  playButtonSound();
});

backButtonHelp.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  playButtonSound();
});

helpButton.addEventListener("click", (a) => {
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToHelp", screens);
  setTimeout(() => {
    toggleClass("scrollToHelp", screens);
  }, 300);
  playButtonSound();
});

// ====INITIAL CONFIG ====
setTimeout(() => {
  loadingScreen.classList.add("hidden");
}, 3000);

toggleClass("scrollToMain", screens);
