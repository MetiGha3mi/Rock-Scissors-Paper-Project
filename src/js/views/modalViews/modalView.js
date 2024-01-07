// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

export default class ModalView {
  _overlay = document.querySelector(".overlay");
  _btnClose = document.querySelector(".btn--close");

  _showWindow() {
    this._overlay.classList.remove("hidden");
    this._btnClose.classList.remove("hidden");
    this._parentElement.classList.remove("hidden");
  }
  _hideWindow() {
    this._parentElement.classList.add("hidden");
    this._overlay.classList.add("hidden");
    this._btnClose.classList.add("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this._showWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this._hideWindow.bind(this));
    this._overlay.addEventListener("click", this._hideWindow.bind(this));
  }
}
