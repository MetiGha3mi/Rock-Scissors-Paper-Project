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
const controlGamePannel = function (data) {
  // 1) Check for Game End
  if (model.state.isGameEnd) return;

  // 2) Setup Game Object
  model.gameRun(data);

  // 3) Render Game Flow
  gameFlowView.render(model.state.data);
};

// init function
const init = function () {
  gamePannelView.addHandlerClick(controlGamePannel);
};
init();
