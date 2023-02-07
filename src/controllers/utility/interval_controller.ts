import {BaseController} from "../../utilities/base_controller";
import {useInterval} from "../../mixins/use_interval";

export class IntervalController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;
  declare readonly hasSecondsValue: boolean;

  connect() {
    if (!this.hasSecondsValue) {
      throw new Error('Expected `secondsValue` to be present');
    }
    requestAnimationFrame(() => {
      useInterval(this, this._interval, this.secondsValue * 1000);
    });
  }

  _interval() {
    this.dispatchEvent(this.el, this.eventName("action"));
  }

}
