// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

// Modules
import { LOAD_TIME } from "../config";

export default class View {
  _data;

  render(data) {
    this._data = data;
    if (!data) return;

    this.renderSpinner();
    setTimeout(() => {
      const markup = this._generateMarkup();

      this._clear();
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
      this._setScores(this._data.scores);
    }, LOAD_TIME);
  }

  reset(data) {
    this._data = data;
    if (!data) return;
    const markup = this._resetGameMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);

    this._setScores(this._data.scores);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="lds-dual-ring"></div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
