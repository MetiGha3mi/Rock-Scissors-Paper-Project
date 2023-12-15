"use strict";

const btnGameEl = document.querySelectorAll("#btn-game");
const rockEl = document.querySelector(".rock");
const scissorsEl = document.querySelector(".scissors");
const paperEl = document.querySelector(".paper");
const yourScoreEl = document.querySelector(".your-score");
const botScoreEl = document.querySelector(".bot-score");
const botResultEl = document.querySelector(".bot-game-result");
const yourResultEl = document.querySelector(".your-game-result");
const gameConditionEl = document.querySelector(".game-condition");
const gameOnEl = document.querySelector(".game-on-header");
const botGameInfoEl = document.querySelector(".bot-game-info");
const yourGameInfoEl = document.querySelector(".your-game-info");
const btnResetEl = document.querySelector(".btn-reset");

let botChoice;
let yourChoice;
let botScore;
let yourScore;
let winRange;
let gameIsRunning;

const gameInIt = function () {
  botScore = 0;
  yourScore = 0;
  winRange = 10;
  gameIsRunning = true;
  yourScoreEl.textContent = yourScore;
  botScoreEl.textContent = botScore;
  yourResultEl.classList.add("hidden");
  botResultEl.classList.add("hidden");
  gameOnEl.classList.add("hide-texts");
  gameConditionEl.classList.add("hide-texts");
  botGameInfoEl.classList.remove("win-state");
  botGameInfoEl.classList.remove("lose-state");
  yourGameInfoEl.classList.remove("win-state");
  yourGameInfoEl.classList.remove("lose-state");
};
gameInIt();

const addYourScore = function () {
  yourScore++;
  yourScoreEl.textContent = yourScore;
};
const addBotScore = function () {
  botScore++;
  botScoreEl.textContent = botScore;
};
const finishGame = function () {
  gameIsRunning = false;
  gameConditionEl.classList.remove("hide-texts");
};

rockEl.addEventListener("click", function () {
  yourChoice = "Rock";
});
scissorsEl.addEventListener("click", function () {
  yourChoice = "Scissors";
});
paperEl.addEventListener("click", function () {
  yourChoice = "Paper";
});

for (let i = 0; i < btnGameEl.length; i++)
  btnGameEl[i].addEventListener("click", function () {
    if (gameIsRunning) {
      let poseNumber = Math.trunc(Math.random() * 3) + 1;
      yourResultEl.classList.remove("hidden");
      botResultEl.classList.remove("hidden");
      gameOnEl.classList.remove("hide-texts");

      if (poseNumber === 1) {
        botChoice = "Rock";
      } else if (poseNumber === 2) {
        botChoice = "Scissors";
      } else if (poseNumber === 3) {
        botChoice = "Paper";
      }

      if (yourChoice === "Rock" && botChoice === "Rock") {
        yourResultEl.src = "img/rockGame.png";
        botResultEl.src = "img/rockGame.png";
        gameOnEl.textContent = "Draw!, Both are Rocks";
      } else if (yourChoice === "Rock" && botChoice === "Scissors") {
        addYourScore();
        yourResultEl.src = "img/rockGame.png";
        botResultEl.src = "img/scissorsGame.png";
        gameOnEl.textContent = "Score for You!, Rock wins the Scissors";
      } else if (yourChoice === "Rock" && botChoice === "Paper") {
        addBotScore();
        yourResultEl.src = "img/rockGame.png";
        botResultEl.src = "img/paperGame.png";
        gameOnEl.textContent = "Score for bot!, Paper wins the Rock";
      } else if (yourChoice === "Scissors" && botChoice === "Rock") {
        addBotScore();
        yourResultEl.src = "img/scissorsGame.png";
        botResultEl.src = "img/rockGame.png";
        gameOnEl.textContent = "Score for bot!, Rock wins the Scissors";
      } else if (yourChoice === "Scissors" && botChoice === "Scissors") {
        yourResultEl.src = "img/scissorsGame.png";
        botResultEl.src = "img/scissorsGame.png";
        gameOnEl.textContent = "Draw!, Both are Scissors";
      } else if (yourChoice === "Scissors" && botChoice === "Paper") {
        addYourScore();
        yourResultEl.src = "img/scissorsGame.png";
        botResultEl.src = "img/paperGame.png";
        gameOnEl.textContent = "Score for you!, Scissors wins the Paper";
      } else if (yourChoice === "Paper" && botChoice === "Rock") {
        addYourScore();
        yourResultEl.src = "img/paperGame.png";
        botResultEl.src = "img/rockGame.png";
        gameOnEl.textContent = "Score for you!, Paper wins the Rock";
      } else if (yourChoice === "Paper" && botChoice === "Scissors") {
        addBotScore();
        yourResultEl.src = "img/paperGame.png";
        botResultEl.src = "img/scissorsGame.png";
        gameOnEl.textContent = "Score for bot!, Scissors wins the Paper";
      } else if (yourChoice === "Paper" && botChoice === "Paper") {
        yourResultEl.src = "img/paperGame.png";
        botResultEl.src = "img/paperGame.png";
        gameOnEl.textContent = "Draw!, Both are Papers";
      }

      if (yourScore === winRange) {
        finishGame();
        yourGameInfoEl.classList.add("win-state");
        botGameInfoEl.classList.add("lose-state");
        gameConditionEl.textContent = "You won the Game!";
      } else if (botScore === winRange) {
        finishGame();
        botGameInfoEl.classList.add("win-state");
        yourGameInfoEl.classList.add("lose-state");
        gameConditionEl.textContent = "Bot won the Game!";
      }
    }
  });

btnResetEl.addEventListener("click", function () {
  gameInIt();
});

console.log("hello world");
