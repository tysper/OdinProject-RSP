"use strict";

const loadingScreen = document.querySelector(".loading");
const startButton = document.querySelector(".start-btn");
const helpButton = document.querySelector(".help-btn");
const backButton = document.querySelector(".back-btn");
const backButtonHelp = document.querySelector(".back-btn-help");

const initialScreen = document.querySelector(".main-screen");
const gameScreen = document.querySelector(".start-screen");
const helpScreen = document.querySelector(".help-screen");

initialScreen.scrollIntoView();
hideElement(helpScreen);
hideElement(gameScreen);

function hideElement(element) {
  element.style.visibility = "hidden";
  return element;
}

function showElement(element) {
  element.style.visibility = "visible";
  return element;
}

setTimeout(() => {
  loadingScreen.classList.add("hidden");
}, 3000);

// function scrollScreen(x, y) {
//   document.querySelector(".game-display").scrollTo(x, y);
// }

startButton.addEventListener("click", (a) => {
  hideElement(initialScreen);
  gameScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  showElement(gameScreen);
});

backButton.addEventListener("click", (a) => {
  hideElement(gameScreen);
  initialScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  showElement(initialScreen);
});

backButtonHelp.addEventListener("click", (a) => {
  hideElement(helpScreen);
  initialScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  showElement(initialScreen);
});

helpButton.addEventListener("click", (a) => {
  hideElement(initialScreen);
  helpScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  showElement(helpScreen);
});
