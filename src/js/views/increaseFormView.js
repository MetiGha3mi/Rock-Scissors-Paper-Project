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

  getNewGameRange() {
    const inputValue =
      +this._parentElement.querySelector(".increase--input").value;
    this._clearInput();
    this._close();
    return inputValue;
  }

  addHandlerSubmit(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentElement.querySelector(".increase--input").value = "";
  }
  _close() {
    this._hideWindow();
  }
}

export default new IncreaseFormView();
