// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import * as model from "./model.js";
import gamePannelView from "./views/gamePannelView";

// Control Game Pannel Function
const controlGamePannel = function (data) {
  gamePannelView.render(model.gameRun(data));
};

// init function
const init = function () {
  console.log("Hello World");
  gamePannelView.addHandlerClick(controlGamePannel);
};
init();
