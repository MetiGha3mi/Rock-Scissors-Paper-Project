// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import View from "./View.js";

class GameFlowView extends View {
  _parentElement = document.querySelector(".game--flow__section");
  _gameFlowElement = document.querySelector(".game--flow__box");

  _generateMarkup() {
    return `
        <!-- Robot User Info -->
        <div class="user--box user--bot__box">
          <div class="circle--box user--name">Robot</div>
          <div class="user--score">${this._data.scores.robotScore}</div>
        </div>

        <!-- Game Flow -->
        <div class="game--flow__box">
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
        </div>

        <!-- Your User Info -->
        <div class="user--box user--you__box">
          <div class="circle--box user--name">You</div>
          <div class="user--score">${this._data.scores.playerScore}</div>
        </div>
    `;
  }
}

export default new GameFlowView();
