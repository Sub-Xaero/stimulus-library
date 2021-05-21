import {Duration, formatDuration, intervalToDuration, toDate} from "date-fns";
import {BaseController} from "../../utilities/base_controller";

export class DurationController extends BaseController {
  static values = {
    timestamp: Number,
    minutes: Boolean,
    seconds: Boolean,
  };

  declare readonly minutesValue: boolean;
  declare readonly hasMinutesValue: boolean;
  declare readonly secondsValue: boolean;
  declare readonly hasSecondsValue: boolean;
  declare timestampValue: number;
  declare readonly hasTimestampValue: boolean;
  _intervalHandle: number | null = null;

  get _format(): string[] {
    return [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      ...(this._minutes ? ["minutes"] : []),
      ...(this._seconds ? ["seconds"] : []),
    ];
  }

  get _output(): string {
    let {years, months, weeks, days, hours, minutes, seconds} = this._duration;

    years ||= 0;
    months ||= 0;
    weeks ||= 0;
    days ||= 0;
    hours ||= 0;
    minutes ||= 0;
    seconds ||= 0;

    let largeDenominators = [years, months, weeks, days, hours];

    if (!this._minutes && !this._seconds && largeDenominators.every((x) => x === 0)) {
      minutes = minutes + seconds / 60.0;
      return `${(minutes / 60).toFixed(1)} hours`;
    }

    return formatDuration(this._duration, {format: this._format, delimiter: ", "});
  }

  get _seconds(): boolean {
    return this.hasSecondsValue ? this.secondsValue : true;
  }

  get _minutes(): boolean {
    return this.hasMinutesValue ? this.minutesValue : true;
  }

  get _timestamp(): Date {
    if (this.hasTimestampValue) {
      return toDate(this.timestampValue * 1000);
    } else {
      throw new Error("Expected `timestampValue` to be present");
    }
  }

  get _duration(): Duration {
    return intervalToDuration({start: new Date(), end: this._timestamp});
  }

  get _tickInterval() {
    if (this._seconds) {
      return 1000; // 1 seconds
    } else if (this._minutes) {
      return 15000; // 15 seconds
    } else {
      return 120000; // 2 minutes
    }
  }

  initialize() {
    this._update = this._update.bind(this);
  }

  connect() {
    this._intervalHandle = window.setInterval(this._update, this._tickInterval);
    this._update();
  }

  disconnect() {
    if (this._intervalHandle) {
      window.clearInterval(this._intervalHandle);
    }
  }

  _update() {
    try {
      this.el.innerHTML = this._output;
    } catch {
      if (this._intervalHandle) {
        window.clearInterval(this._intervalHandle);
      }
    }
  }
}
