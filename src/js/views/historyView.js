// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import ModalView from "./modalView.js";
import { LOAD_TIME } from "../config.js";

class IncreaseFormView extends ModalView {
  _parentElement = document.querySelector(".history--box");
  _btnOpen = document.querySelector(".btn--check__history");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  addHistory(data) {
    if (data.length > 2)
      this._parentElement.classList.add("history--box__scroll");
    setTimeout(() => {
      const markup = this._generateMarkup(data);
      this._clear();
      this._parentElement
        .querySelector(".history--list")
        .insertAdjacentHTML("afterbegin", markup);
    }, LOAD_TIME);
  }

  _generateMarkup(data) {
    const markup = data
      .map(
        (el) =>
          `
        <li class="history--list__item">
          <div class="history--user">
           <span class="circle--box history--user__name">Robot</span>
          </div>
          <div class="history--game__resutls">
            <div class="history--user__results">${el.scores.robotScore}</div>
            <div class="history--results__message">${el.gameMessage}</div>
            <div class="history--user__results">${el.scores.playerScore}</div>
          </div>
          <div class="history--user">
            <span class="circle--box history--user__name">You</span>
          </div>
        </li>`
      )
      .join("");

    return markup;
  }

  _clear() {
    this._parentElement.querySelector(".history--list").innerHTML = "";
  }
}

export default new IncreaseFormView();
