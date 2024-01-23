import { type Duration } from "date-fns";
import { formatDuration } from "date-fns/formatDuration";
import { intervalToDuration } from "date-fns/intervalToDuration";
import { toDate } from "date-fns/toDate";
import { BaseController } from "@stimulus-library/utilities";
import { useInterval } from "@stimulus-library/mixins";

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
  declare _clearInterval: () => void;

  get _format(): (keyof Duration)[] {
    const keys: (keyof Duration)[] = [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
    ];
    if (this._minutes) {
      keys.push("minutes");
    }
    if (this._seconds) {
      keys.push("seconds");
    }

    return keys;
  }

  get _output(): string {
    let { years, months, weeks, days, hours, minutes, seconds } = this._duration;

    years ||= 0;
    months ||= 0;
    weeks ||= 0;
    days ||= 0;
    hours ||= 0;
    minutes ||= 0;
    seconds ||= 0;

    const largeDenominators = [years, months, weeks, days, hours];

    if (!this._minutes && !this._seconds && largeDenominators.every((x) => x === 0)) {
      minutes = minutes + seconds / 60.0;
      return `${(minutes / 60).toFixed(1)} hours`;
    }

    return formatDuration(this._duration, { format: this._format, delimiter: ", " });
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
    return intervalToDuration({ start: new Date(), end: this._timestamp });
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

  connect() {
    this._clearInterval = useInterval(this, this._update, this._tickInterval);
    this._update();
  }


  _update() {
    try {
      this.el.innerHTML = this._output;
    } catch {
      this._clearInterval();
    }
  }
}
