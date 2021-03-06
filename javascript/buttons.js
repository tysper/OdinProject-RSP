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

let firstTime = 1;
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
  if (firstTime === 1) {
    const quietSound = new Audio("../sounds/quiet-sound.mp3");
    quietSound.play();
    setTimeout(() => {
      playButtonSound();
    }, 500);
    firstTime -= 1;
  } else {
    playButtonSound();
  }
  toggleClass("scrollToMain", screens);
  toggleClass("scrollToGame", screens);
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
