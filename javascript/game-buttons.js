"use strict";

// ====Buttons ====
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorButton = document.querySelector(".scissor-btn");
const playAgainButton = document.querySelector(".play-again-btn");

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

const resultScreen = document.querySelector(".result-screen");
const resultBall = document.querySelector(".result-ball");
const resultText = document.querySelector(".results-text");
const winnerIcon = document.querySelector(".results-icon.winner");
const looserIcon = document.querySelector(".results-icon.looser");
const iconContainer = document.querySelector(".icon-container");

// ====Files ====
const buttonAudio = new Audio("../sounds/button-sound.mp3");
const bubbleSound = new Audio("../sounds/bubble-sound.mp3");
const winSound = new Audio("../sounds/win-sound.mp3");
const looserSound = new Audio("../sounds/game-over-sound.mp3");

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
  addMessage("real-player", `${text}`, matchDisplay).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  bubbleSound.play();
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

function showResults(text, icon) {
  resultText.innerHTML = `${text}`;
  if (icon === 0) {
    winnerIcon.classList.remove("hidden");
    looserIcon.classList.add("hidden");
    resultBall.style.setProperty("--result-color", "#51cf66");
    winSound.play();
  } else {
    looserIcon.classList.remove("hidden");
    winnerIcon.classList.add("hidden");
    resultBall.style.setProperty("--result-color", "#fa5252");
    looserSound.play();
  }
  resultScreen.classList.toggle("hidden");
  return resultScreen;
}

function resetMatch() {
  playerPoints = 0;
  pcPoints = 0;
  updatePoints(0, playerPointsEl);
  updatePoints(0, pcPointsEl);
  document.querySelectorAll(".chat-bubble").forEach((x) => x.remove());
  talkToPlayer(
    `Nice to see you've liked the game! To begin choose your first move and I will choose mine.`
  );
  return 1;
}

function checkWinner() {
  if (playerPoints > 4) {
    showResults("You've won!", 0);
  } else if (pcPoints > 4) {
    showResults("You've lost!", 1);
  }
  return true;
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
      talkToPlayer(returnMessage(roundWinner))[1].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      bubbleSound.play();
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

      setTimeout(() => checkWinner(), 1000);

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

playAgainButton.addEventListener("click", () => {
  resetMatch();
  buttonAudio.play();
  resultScreen.classList.add("hidden");
});
// ====Game Logic =====
talkToPlayer(
  `Welcome to Rock, Paper and Scissors! It is nice to have you here! To begin choose your first move and I will choose mine.`
);
