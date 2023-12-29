// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import ModalView from "./modalView.js";

class IncreaseFormView extends ModalView {
  _parentElement = document.querySelector(".increase--form");
  _btnOpen = document.querySelector(".btn--increase__score");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
}

export default new IncreaseFormView();
