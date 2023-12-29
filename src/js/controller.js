// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import * as model from "./model.js";
import gamePannelView from "./views/gamePannelView";
import increaseFormView from "./views/increaseFormView.js";
import historyView from "./views/historyView.js";

// Control Game Pannel Function
const controlGamePannel = function (data) {
  gamePannelView.render(model.gameRun(data));
};

// init function
const init = function () {
  gamePannelView.addHandlerClick(controlGamePannel);
};
init();
