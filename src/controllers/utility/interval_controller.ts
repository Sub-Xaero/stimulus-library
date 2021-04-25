import {BaseController} from "../../utilities/base_controller";

export class IntervalController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;
  declare readonly hasSecondsValue: boolean;
  _intervalHandle: null | number = null;

  initialize() {
    this._interval = this._interval.bind(this);
  }

  connect() {
    if (!this.hasSecondsValue) {
      throw new Error('Expected `secondsValue` to be present')
    }
    requestAnimationFrame(() => {
      this._intervalHandle = window.setInterval(this._interval, this.secondsValue * 1000);
    });
  }

  disconnect() {
    if (this._intervalHandle) {
      window.clearInterval(this._intervalHandle);
    }
  }

  _interval() {
    this.dispatch(this.el, "interval:action");
  }

}