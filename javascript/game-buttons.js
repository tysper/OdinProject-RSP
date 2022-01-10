"use strict";

// ====Buttons ====
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorButton = document.querySelector(".scissor-btn");

// ====Display and Visuals ====
const matchDisplay = document.querySelector(".inner-display");
const chatBubbles = document.querySelectorAll(".chat-bubble");

// ====State Control ====
let processingMove = false;

// ====Plays ====
let currentPlayerMove = [];
let currentPcMove = [];

// ====Points system ====
const pcPointsEl = document.querySelector(".pc-points");
const playerPointsEl = document.querySelector(".score-points");
const playersPoints = [pcPointsEl, playerPointsEl];
let playerPoints = 0;
let pcPoints = 0;

// ====Who wins ====
const winsTo = {
  rock: ["scissor"],
  scissor: ["paper"],
  paper: ["rock"],
};

// ====Functions ====
function addMessage(player, text, target) {
  // adds the message to the target
  const el = document.createElement("p");
  el.innerHTML = `${text}`;
  el.classList.add(`${player}`);
  el.classList.add("chat-bubble");
  target.appendChild(el);
  return el;
}

function talkToPlayer(text) {
  // display a message from the pc
  return [text, addMessage("pc-player", `${text}`, matchDisplay)];
}

function talkToPc(text) {
  // display a message from the real player
  addMessage("real-player", `${text}`, matchDisplay).scrollIntoView();
  return text;
}

function getMove() {
  // get the next move from pc
  let options = ["rock", "scissor", "paper"];
  return options[Math.floor(Math.random() * 3)];
}

function updateLine(arr, move) {
  // updates any line
  arr.push(move);
  if (arr.length > 1) {
    arr.shift();
  }
  return arr;
}

function returnWinner(player1, player2) {
  // calculates the winner
  if (player1 === player2) {
    return 0;
  } else {
    if (winsTo[player1][0] === player2) {
      return 1;
    } else {
      return 2;
    }
  }
}

function returnMessage(winner) {
  if (winner === 0) {
    return "Looks like no one wins this time.";
  } else if (winner === 1) {
    return "Well, nice play!";
  } else if (winner === 2) {
    return "Looks like I am better than you.";
  }
}

function updatePoints(points, el) {
  el.innerHTML = points;
  return el;
}

function startRound(realPlayer) {
  if (!processingMove) {
    //  state handler
    processingMove = true;
    // update current move and show it
    updateLine(currentPlayerMove, talkToPc(`${realPlayer}`));
    updateLine(currentPcMove, getMove());
    // to look more natural add 2s before showing the pc move
    setTimeout(() => {
      // get round winner
      let roundWinner = returnWinner(currentPlayerMove[0], currentPcMove[0]);
      // Show to the player the pc move and tell who wins
      talkToPlayer(`${currentPcMove[0]}`);
      talkToPlayer(returnMessage(roundWinner))[1].scrollIntoView();
      // Update the points system and the elements too
      if (roundWinner !== 0) {
        if (roundWinner === 1) {
          playerPoints += 1;
          updatePoints(playerPoints, playerPointsEl);
        } else {
          pcPoints += 1;
          updatePoints(pcPoints, pcPointsEl);
        }
      }
      // state handler
      processingMove = false;
    }, 2000);
  }
}

// ====Event Listeners ====
rockButton.addEventListener("click", () => {
  startRound("rock");
});

paperButton.addEventListener("click", () => {
  startRound("paper");
});

scissorButton.addEventListener("click", () => {
  startRound("scissor");
});

// ====Game Logic
talkToPlayer(
  `Welcome to Rock, Paper and Scissors! It is nice to have you here! To begin choose your first move and I will choose mine.`
);
