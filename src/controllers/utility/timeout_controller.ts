import {BaseController} from "../../utilities/base_controller";

export class TimeoutController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;
  _timeoutHandle: null | number = null;

  initialize() {
    this._timeout = this._timeout.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this._timeoutHandle = window.setTimeout(this._timeout, this.secondsValue * 1000);
    });
  }

  disconnect() {
    if (this._timeoutHandle) {
      window.clearTimeout(this._timeoutHandle);
    }
  }

  _timeout() {
    this.dispatch(this.el, "timeout");
  }

}