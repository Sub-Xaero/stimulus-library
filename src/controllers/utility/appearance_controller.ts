import {BaseController} from "../../utilities/base_controller";

export class AppearanceController extends BaseController {

  initialize() {
    this._handleVisibility = this._handleVisibility.bind(this);
  }

  connect() {
    window.addEventListener("focus", this._handleVisibility);
    window.addEventListener("blur", this._handleVisibility);
    document.addEventListener("visibilitychange", this._handleVisibility);
    requestAnimationFrame(() => {
      this._handleVisibility();
    });
  }

  disconnect() {
    window.removeEventListener("focus", this._handleVisibility);
    window.removeEventListener("blur", this._handleVisibility);
    document.removeEventListener("visibilitychange", this._handleVisibility);
  }

  appear() {
    this.dispatch(this.el, "appearance:appear");
  }

  away() {
    this.dispatch(this.el, "appearance:away");
  }

  private _handleVisibility() {
    this._documentIsActive() ? this.appear() : this.away();
  }

  private _documentIsActive() {
    return document.visibilityState == "visible" && document.hasFocus();
  }

}
