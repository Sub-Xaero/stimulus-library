import { BaseController } from "@stimulus-library/utilities";
import { useInterval } from "@stimulus-library/mixins";

export class ClockController extends BaseController {


  static targets = ["hours", "minutes", "seconds", "milliseconds"];

  declare readonly hasHoursTarget: boolean;
  declare readonly hoursTarget: HTMLElement;
  declare readonly hasMinutesTarget: boolean;
  declare readonly minutesTarget: HTMLElement;
  declare readonly hasSecondsTarget: boolean;
  declare readonly secondsTarget: HTMLElement;
  declare readonly hasMillisecondsTarget: boolean;
  declare readonly millisecondsTarget: HTMLElement;

  get _tickInterval() {
    if (this.hasMillisecondsTarget) {
      return 1; // 1 ms
    } else if (this.hasSecondsTarget) {
      return 1000; // 1 seconds
    } else if (this.hasMinutesTarget) {
      return 15000; // 15 seconds
    } else {
      return 300000; // Every 5 minutes
    }
  }

  connect() {
    requestAnimationFrame(() => {
      useInterval(this, this._tick, this._tickInterval);
    });
  }

  _tick() {
    const current = new Date();

    if (this.hasHoursTarget) {
      this.hoursTarget.innerHTML = current
        .getHours()
        .toString()
        .padStart(2, "0");
    }
    if (this.hasMinutesTarget) {
      this.minutesTarget.innerHTML = current
        .getMinutes()
        .toString()
        .padStart(2, "0");
    }
    if (this.hasSecondsTarget) {
      this.secondsTarget.innerHTML = current
        .getSeconds()
        .toString()
        .padStart(2, "0");
    }
    if (this.hasMillisecondsTarget) {
      this.millisecondsTarget.innerHTML = current
        .getMilliseconds()
        .toString()
        .padStart(3, "0");
    }
  }
}
