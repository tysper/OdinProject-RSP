"use strict";

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorButton = document.querySelector(".scissor-btn");
const matchDisplay = document.querySelector(".match-display");

console.log(rockButton, paperButton, scissorButton);

function addMessage(player, text, target) {
  const el = document.createElement("p");
  el.innerHTML = `${text}`;
  el.classList.add(`${player}`);
  el.style.transition = "all ease 0.3s";
  target.appendChild(el);
  return el;
}

console.log(matchDisplay.offsetWidth);
rockButton.addEventListener("click", () => {
  addMessage("real-player", "Rock", matchDisplay).scrollIntoView();
});

paperButton.addEventListener("click", () => {
  addMessage("real-player", "Paper", matchDisplay).scrollIntoView();
});

scissorButton.addEventListener("click", () => {
  addMessage("real-player", "Scissor", matchDisplay).scrollIntoView();
});
