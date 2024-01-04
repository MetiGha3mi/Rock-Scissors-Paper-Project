// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import * as model from "./model.js";
import gamePannelView from "./views/gamePannelView.js";
import increaseFormView from "./views/increaseFormView.js";
import historyView from "./views/historyView.js";
import gameFlowView from "./views/gameFlowView.js";
import gameMessageView from "./views/gameMessageView.js";
import gameAlertView from "./views/gameAlertView.js";

// Control Game Pannel Function
const controlGame = function (data) {
  // 1) Check if data = "reset"
  if (data === "reset") return controlResetGame();

  // 2) Check for Game End
  if (model.state.isGameEnd)
    return gameMessageView.showGameMessage(model.state.gameMessage);

  // 3) Setup Game Object
  model.gameRun(data);

  // 4) Render Game Flow
  gameFlowView.render(model.state.data);
};

const controlGameRange = function () {
  // 1) Get Data and Validate it
  const value = increaseFormView.getNewGameRange();
  if (!value || value <= 0) return;

  // 2) Check if isGameEnd = true, Don't Change anything!
  if (model.state.isGameEnd)
    return gameMessageView.showGameMessage(
      "Game has been ended! please reset game first"
    );

  // 3) set value that we recieved to the model.state.updateGameRange
  model.state.updatedGameRange = value;

  console.log(model.state.updatedGameRange);

  if (!model.state.data) return gameFlowView.updataRange(model.setGameRange());
  else return gameAlertView.showWindow();
};

const controlResetGame = function () {
  // 1) Check if isGameEnd = true, then Reset Whole the Game
  if (model.state.isGameEnd || !model.state.data)
    return gameFlowView.reset(model.resetGame());

  // 2) Check if isGameEnd = false and is There any Data (in {} format) in model.state.data, then Show the Alert Message
  if (!model.state.isGameEnd && model.state.data !== null)
    return gameAlertView.showWindow();
};

const controlGameAlert = function (dataSet) {
  // 1) Check if User Clicks "NO" btn, then Return this function
  if (dataSet === "no") return gameAlertView.hideWindow();

  // 2) Check if User Clicks "YES" btn, the  Reset Whole the Games
  if (dataSet === "yes") {
    if (model.state.updatedGameRange)
      gameFlowView.updataRange(model.setGameRange());

    gameFlowView.reset(model.resetGame());

    return gameAlertView.hideWindow();
  }
};

// init function
const init = function () {
  gamePannelView.addHandlerClick(controlGame);
  increaseFormView.addHandlerSubmit(controlGameRange);
  gameAlertView.addHandlerClick(controlGameAlert);
};
init();
