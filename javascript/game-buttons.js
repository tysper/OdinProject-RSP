"use strict";

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorButton = document.querySelector(".scissor-btn");
const matchDisplay = document.querySelector(".inner-display");
const chatBubbles = document.querySelectorAll(".chat-bubble");
const blankSpace = document.querySelector(".blank-space");
const outterDisplay = document.querySelector(".match-display");

let messageCount = 0;
function translateInner(px) {
  document.querySelector(
    ".inner-display"
  ).style.transform = `translateY(-${px}px)`;
}
function addMessage(player, text, target) {
  const el = document.createElement("p");
  el.innerHTML = `${text}`;
  el.classList.add(`${player}`);
  el.classList.add("chat-bubble");
  target.appendChild(el);
  messageCount += 1;
  translateInner(53 * messageCount - 250);
  return el;
}

rockButton.addEventListener("click", () => {
  addMessage("real-player", "Rock", matchDisplay);
});

paperButton.addEventListener("click", () => {
  addMessage("real-player", "Paper", matchDisplay);
});

scissorButton.addEventListener("click", () => {
  addMessage("real-player", "Scissor", matchDisplay);
});
