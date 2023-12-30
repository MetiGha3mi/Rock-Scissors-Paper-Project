// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

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
    }, 400);
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
