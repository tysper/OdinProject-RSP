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

// ====FUNCTIONS =====
function hideElement(element) {
  element.style.visibility = "hidden";
  return element;
}

function showElement(element) {
  element.style.visibility = "visible";
  return element;
}

// ====EVENT LISTENERS ====
startButton.addEventListener("click", (a) => {
  // hideElement(initialScreen);
  // gameScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  // showElement(gameScreen);
  initialScreen.classList.toggle("scrollToMain");
  helpScreen.classList.toggle("scrollToMain");
  gameScreen.classList.toggle("scrollToMain");
  initialScreen.classList.toggle("scrollToGame");
  helpScreen.classList.toggle("scrollToGame");
  gameScreen.classList.toggle("scrollToGame");
});

backButton.addEventListener("click", (a) => {
  // hideElement(gameScreen);
  // initialScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  // showElement(initialScreen);
  initialScreen.classList.toggle("scrollToGame");
  helpScreen.classList.toggle("scrollToGame");
  gameScreen.classList.toggle("scrollToGame");
  initialScreen.classList.toggle("scrollToMain");
  helpScreen.classList.toggle("scrollToMain");
  gameScreen.classList.toggle("scrollToMain");
});

backButtonHelp.addEventListener("click", (a) => {
  // hideElement(helpScreen);
  // initialScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  // showElement(initialScreen);
  initialScreen.classList.toggle("scrollToMain");
  helpScreen.classList.toggle("scrollToMain");
  gameScreen.classList.toggle("scrollToMain");
});

helpButton.addEventListener("click", (a) => {
  // hideElement(initialScreen);
  // helpScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  // showElement(helpScreen);
  initialScreen.classList.toggle("scrollToMain");
  helpScreen.classList.toggle("scrollToMain");
  gameScreen.classList.toggle("scrollToMain");
  initialScreen.classList.toggle("scrollToHelp");
  helpScreen.classList.toggle("scrollToHelp");
  gameScreen.classList.toggle("scrollToHelp");
  setTimeout(() => {
    initialScreen.classList.toggle("scrollToHelp");
    helpScreen.classList.toggle("scrollToHelp");
    gameScreen.classList.toggle("scrollToHelp");
  }, 300);
});

// ====INITIAL CONFIG ====
setTimeout(() => {
  loadingScreen.classList.add("hidden");
}, 3000);

// initialScreen.scrollIntoView();
// hideElement(helpScreen);
// hideElement(gameScreen);
