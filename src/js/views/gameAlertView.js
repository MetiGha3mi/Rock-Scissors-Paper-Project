// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import ModalView from "./modalView.js";

class GameAlertView extends ModalView {
  _parentElement = document.querySelector(".game--alert");
  constructor() {
    super();

    this._addHandlerHideWindow();
  }

  showWindow() {
    this._overlay.classList.remove("hidden");
    this._parentElement.classList.remove("hidden");
  }
  hideWindow() {
    this._overlay.classList.add("hidden");
    this._parentElement.classList.add("hidden");
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".game--alert__btn");
      if (!btn) return;
      const dataSet = btn.dataset.result;

      handler(dataSet);
    });
  }

  _addHandlerHideWindow() {
    // this._btnClose.addEventListener("click", this._hideWindow.bind(this));
    this._overlay.addEventListener("click", this.hideWindow.bind(this));
  }
}

export default new GameAlertView();
