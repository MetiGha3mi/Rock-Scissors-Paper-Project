// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import ModalView from "./modalView.js";

class IncreaseFormView extends ModalView {
  _parentElement = document.querySelector(".history--box");
  _btnOpen = document.querySelector(".btn--check__history");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
}

export default new IncreaseFormView();
