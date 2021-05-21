import {BaseController} from "../../utilities/base_controller";

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

  _intervalHandle: null | number = null;

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

  initialize() {
    this._tick = this._tick.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this._intervalHandle = window.setInterval(this._tick, this._tickInterval);
    });
  }

  disconnect() {
    if (this._intervalHandle) {
      window.clearInterval(this._intervalHandle);
    }
  }

  _tick() {
    let current = new Date();

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
