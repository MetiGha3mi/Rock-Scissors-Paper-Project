// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Data State
export const state = {
  gameImgURLs: {
    rock: "./src/img/rockGame.png",
    scissors: "./src/img/scissorsGame.png",
    paper: "./src/img/paperGame.png",
  },
  moves: {
    robotMove: "",
    playerMove: "",
  },
  scores: {
    robotScore: 0,
    playerScore: 0,
  },
  data: {},
  gameMessage: "",
};

// Run the Game
export const gameRun = function (data) {
  // 1) Guard for Reset btn
  if (data === "reset") return;

  // 2) Set the Each User Real Moves
  state.moves.robotMove = generateRobotMove();
  state.moves.playerMove = data;

  // 3) Collect the Moves in an Array and Send Them for Game Logic
  const gameMoves = [state.moves.robotMove, state.moves.playerMove];
  state.gameMessage = gameLogic(gameMoves);

  // 4) Return Final Data for Render
  state.data = {
    scores: state.scores,
    moves: state.moves,
    urls: {
      robot: state.gameImgURLs[gameMoves[0]],
      player: state.gameImgURLs[gameMoves[1]],
    },
    gameMessage: state.gameMessage,
  };
  return state.data;
};

// Generate Robot Move
const generateRobotMove = function () {
  // 1) Generate Random Number for Robot Moves
  const randomNum = Math.trunc(Math.random() * 3);

  // 2) Set a Real Value for Robot Moves by Random Number
  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "scissors";
  if (randomNum === 2) return "paper";
};

// Game Logic
const gameLogic = function (gameMoves) {
  // 1) Score for Rock
  if (gameMoves[1] === "rock" && gameMoves[0] === "scissors") {
    state.scores.playerScore++;
    return "Score for Player!";
  } else if (gameMoves[0] === "rock" && gameMoves[1] === "scissors") {
    state.scores.robotScore++;
    return "Score for Robot!";
  }

  // 2) Score for Paper
  if (gameMoves[1] === "paper" && gameMoves[0] === "rock") {
    state.scores.playerScore++;
    return "Score for Player!";
  } else if (gameMoves[0] === "paper" && gameMoves[1] == "rock") {
    state.scores.robotScore++;
    return "Score for Player!";
  }

  // 3) Score for Scissors
  if (gameMoves[1] === "scissors" && gameMoves[0] === "paper") {
    state.scores.playerScore++;
    return "Score for Player!";
  } else if (gameMoves[0] === "scissors" && gameMoves[1] === "paper") {
    state.scores.robotScore++;
    return "Score for Robot!";
  }

  // 4) Draw
  if (gameMoves[0] === gameMoves[1]) return "Draw";
};
