import { BaseController } from "@stimulus-library/utilities";
import { useTimeout } from "@stimulus-library/mixins";

export class TimeoutController extends BaseController {

  static values = { seconds: Number };

  declare readonly secondsValue: number;

  connect() {
    requestAnimationFrame(() => {
      useTimeout(this, this._timeout, this.secondsValue * 1000);
    });
  }

  _timeout() {
    this.dispatchEvent(this.el, "timeout");
  }

}