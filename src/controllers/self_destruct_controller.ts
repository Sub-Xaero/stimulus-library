import {BaseController} from "../utilities/base_controller";

export class SelfDestructController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;
  _timeout: null | ReturnType<typeof window.setTimeout> = null;

  connect() {
    requestAnimationFrame(() => {
      // Only start countdown on first paint
      this._timeout = setTimeout(() => this.el.remove(), this.secondsValue * 1000);
    });
  }

  disconnect() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }

}
