// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import View from "./View.js";
import { LOAD_TIME } from "../config.js";

class GameFlowView extends View {
  _parentElement = document.querySelector(".game--flow__box");

  _generateMarkup() {
    return `
          <div class="game--flow">
            <div class="user--flow">
              <img
                class="game--flow__img bot--game__flow-img"
                src="${this._data.urls.robot}"
                alt="RSP game img"
              />
            </div>
            <div class="circle--box win--range__box">
              <span class="win--range">${this._data.gameRange}</span>
            </div>
            <div class="user--flow">
              <img
                class="game--flow__img bot--game__flow-img"
                src="${this._data.urls.player}"
                alt="RSP game img"
              />
            </div>
          </div>
          <div class="game--message__box">
            <span class="game--message"> ${this._data.gameMessage} </span>
          </div>
    `;
  }

  _resetGameMarkup() {
    return `
    <div class="game--flow">
      <div class="user--flow"></div>
    <div class="circle--box win--range__box">
      <span class="win--range">${this._data.gameRange}</span>
    </div>
     <div class="user--flow"></div>
    </div>
    <div class="game--message__box">
      <span class="game--message">${this._data.gameMessage}</span>
    </div>`;
  }

  _setScores(data) {
    const userScores =
      this._parentElement.parentElement.querySelectorAll(".user--score");

    userScores.forEach((el, i) =>
      i === 0
        ? (el.textContent = data.robotScore)
        : (el.textContent = data.playerScore)
    );
  }

  updataRange(data) {
    const range = this._parentElement.querySelector(".win--range");
    range.textContent = data;
  }
}

export default new GameFlowView();
