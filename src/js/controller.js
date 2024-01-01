// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import * as model from "./model.js";
import gamePannelView from "./views/gamePannelView.js";
import increaseFormView from "./views/increaseFormView.js";
import historyView from "./views/historyView.js";
import gameFlowView from "./views/gameFlowView.js";

// Control Game Pannel Function
const controlGame = function (data) {
  // 1) Check if data = "reset"
  if (data === "reset") return gameFlowView.reset(model.resetGame());

  // 2) Check for Game End
  if (model.state.isGameEnd) return;

  // 3) Setup Game Object
  model.gameRun(data);

  // 4) Render Game Flow
  gameFlowView.render(model.state.data);
};

const controlGameRange = function () {
  // 1) Get Data and Validate it
  const value = increaseFormView.getNewGameRange();
  if (!value || value <= 0) return;

  // 2) Set Game Range = value
  gameFlowView.updataRange(model.setGameRange(value));
};

// init function
const init = function () {
  gamePannelView.addHandlerClick(controlGame);
  increaseFormView.addHandlerSubmit(controlGameRange);
};
init();
