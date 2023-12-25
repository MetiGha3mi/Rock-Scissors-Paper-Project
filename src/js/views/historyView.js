// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

class IncreaseFormView {
  _parentElement = document.querySelector(".history--box");

  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".btn--check__history");
  _btnClose = document.querySelector(".btn--close");

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._btnClose.classList.toggle("hidden");
    this._parentElement.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this._toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this._toggleWindow.bind(this));
    this._overlay.addEventListener("click", this._toggleWindow.bind(this));
  }
}

export default new IncreaseFormView();
