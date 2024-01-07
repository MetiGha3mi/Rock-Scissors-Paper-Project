// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import ModalView from "./modalView.js";

class GameMessageView extends ModalView {
  _parentElement = document.querySelector(".game--modal__message");

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  _showWindow() {
    this._overlay.classList.remove("hidden");
    this._parentElement.classList.remove("hidden");
  }
  _hideWindow() {
    this._overlay.classList.add("hidden");
    this._parentElement.classList.add("hidden");
  }
  showGameMessage(message) {
    this._showWindow();
    this._parentElement.querySelector(
      ".game--modal__message-text"
    ).textContent = message;
  }
  _addHandlerHideWindow() {
    this._parentElement
      .querySelector(".btn--game__modal")
      .addEventListener("click", this._hideWindow.bind(this));
    this._overlay.addEventListener("click", this._hideWindow.bind(this));
  }
}

export default new GameMessageView();
