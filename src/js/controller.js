// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import * as model from "./model.js";
import gamePannelView from "./views/gamePannelView.js";
import gameFlowView from "./views/gameFlowView.js";
import increaseFormView from "./views/modalViews/increaseFormView.js";
import historyView from "./views/modalViews/historyView.js";
import gameMessageView from "./views/modalViews/gameMessageView.js";
import gameAlertView from "./views/modalViews/gameAlertView.js";

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

  // 5) Add Results to the History
  if (
    model.state.history &&
    Array.isArray(model.state.history) &&
    model.state.isGameEnd
  )
    historyView.addHistory(model.state.history);
};

const controlGameRange = function () {
  // 1) Get Data and Validate it
  const value = increaseFormView.getNewGameRange();
  if (!value || value <= 0) return;

  // 2) Check if isGameEnd = true, Return a Game Message
  if (model.state.isGameEnd)
    return gameMessageView.showGameMessage(
      "Game has been ended! please reset game first"
    );

  // 3) Set Value That Recieved, To the model.state.updateGameRange
  model.state.updatedGameRange = value;

  // 4) Check If There is no Data(in {} format) in model.state.data, Update the Range
  if (!model.state.data) return gameFlowView.updataRange(model.setGameRange());
  // 5) Else There is any Data(in {} format) in model.state.data, Then Alert User Before Doing Anything!
  else return gameAlertView.showWindow();
};

const controlResetGame = function () {
  // 1) Check if isGameEnd = true, then Reset Whole the Game
  if (model.state.isGameEnd || !model.state.data)
    return gameFlowView.reset(model.resetGame());

  // 2) Check if isGameEnd = false and is There any Data (in {} format) in model.state.data, Then Show the Alert Message
  if (!model.state.isGameEnd && model.state.data !== null)
    return gameAlertView.showWindow();
};

const controlGameAlert = function (dataSet) {
  // 1) Check if User Clicks "NO" btn, then Return this function
  if (dataSet === "no") return gameAlertView.hideWindow();

  // 2) Check if User Clicks "YES" btn, the  Reset Whole the Games
  if (dataSet === "yes") {
    // 2.1) If There is Value in model.state.updateGameRange, Then Update the Game Range
    if (model.state.updatedGameRange)
      gameFlowView.updataRange(model.setGameRange());

    // 2.2) Reset Whole Game Anyway
    gameFlowView.reset(model.resetGame());

    // 2.3) After All, Close The Game Alert Modal Window
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
