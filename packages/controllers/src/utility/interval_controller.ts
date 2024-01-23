import { BaseController } from "@stimulus-library/utilities";
import { useInterval } from "@stimulus-library/mixins";

export class IntervalController extends BaseController {

  static values = { seconds: Number };

  declare readonly secondsValue: number;
  declare readonly hasSecondsValue: boolean;

  connect() {
    if (!this.hasSecondsValue) {
      throw new Error("Expected `secondsValue` to be present");
    }
    requestAnimationFrame(() => {
      useInterval(this, this._interval, this.secondsValue * 1000);
    });
  }

  _interval() {
    this.dispatchEvent(this.el, this.eventName("action"));
  }

}
