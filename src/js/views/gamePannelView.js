// Needed third-party dependencies
import "core-js";
import "regenerator-runtime";

class GamePannelView {
  _parentElement = document.querySelector(".game--pannel__section");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn");
      if (!btn) return;

      handler(btn.dataset.name);
    });
  }

  render(data) {
    if (!data) return;
    console.log(data);
  }
}

export default new GamePannelView();
