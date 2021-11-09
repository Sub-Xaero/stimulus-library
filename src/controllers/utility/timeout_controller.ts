import {BaseController} from "../../utilities/base_controller";
import {useTimeout} from "../../mixins/use_timeout";
import {dispatchEvent} from "../../utilities/events";

export class TimeoutController extends BaseController {

  static values = {seconds: Number};

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