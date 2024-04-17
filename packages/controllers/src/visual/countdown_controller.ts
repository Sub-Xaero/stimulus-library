import { type Duration } from "date-fns";
import { intervalToDuration } from "date-fns/intervalToDuration";
import { isPast } from "date-fns/isPast";
import { BaseController } from "@stimulus-library/utilities";
import { installClassMethods } from "@stimulus-library/mixins";

export class CountdownController extends BaseController {

  static values = {
    deadline: String,
    removeUnused: Boolean,
    padZeros: Boolean,
  };
  static targets = ["years", "months", "days", "hours", "minutes", "seconds"];
  static classes = ["countingDown", "ended"];

  // Values
  declare readonly deadlineValue: string;
  declare readonly removeUnusedValue: boolean;
  declare readonly hasRemoveUnusedValue: boolean;
  declare readonly padZerosValue: boolean;
  declare readonly hasPadZerosValue: boolean;
  // Targets
  declare readonly hasYearsTarget: boolean;
  declare readonly yearsTarget: HTMLElement;
  declare readonly hasMonthsTarget: boolean;
  declare readonly monthsTarget: HTMLElement;
  declare readonly hasDaysTarget: boolean;
  declare readonly daysTarget: HTMLElement;
  declare readonly hasHoursTarget: boolean;
  declare readonly hoursTarget: HTMLElement;
  declare readonly hasMinutesTarget: boolean;
  declare readonly minutesTarget: HTMLElement;
  declare readonly hasSecondsTarget: boolean;
  declare readonly secondsTarget: HTMLElement;
  // Classes
  declare addEndedClasses: (el?: HTMLElement) => void;
  declare removeEndedClasses: (el?: HTMLElement) => void;
  declare addCountingDownClasses: (el?: HTMLElement) => void;
  declare removeCountingDownClasses: (el?: HTMLElement) => void;

  // Instance Data
  _timeout: null | ReturnType<typeof window.setTimeout> = null;

  get _removeUnused(): boolean {
    return this.hasRemoveUnusedValue ? this.removeUnusedValue : false;
  }

  get _padZeros(): boolean {
    return this.hasPadZerosValue ? this.padZerosValue : true;
  }

  get _deadlineDate() {
    return new Date(this.deadlineValue);
  }

  initialize() {
    this._tick = this._tick.bind(this);
  }

  connect() {
    this._timeout = setTimeout(this._tick, 1000);
    installClassMethods(this);
    this.addCountingDownClasses();
  }

  disconnect() {
    this._clearTick();
    this.removeCountingDownClasses();
    this.removeEndedClasses();
  }

  deadlineValueChanged() {
    // Countdown had previously ended, restart ticking. Updating mid-tick will just work.
    if (this._timeout == null) {
      this._timeout = setTimeout(this._tick, 1000);
    }
  }

  _tick() {
    try {
      const now = new Date();
      let distance: Duration = {};

      if (isPast(this._deadlineDate)) {
        distance = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        // Countdown has ended, stop ticking
        this._clearTick();
        this.removeCountingDownClasses();
        this.addEndedClasses();
        this.dispatchEvent(this.el, this.eventName("ended"));
        return;
      } else {
        distance = intervalToDuration({ start: now, end: this._deadlineDate });
        this._timeout = setTimeout(this._tick, 1000);
      }

      if (this.hasYearsTarget) {
        this._updateTarget(this.yearsTarget, this._years(distance));
      }
      if (this.hasMonthsTarget) {
        this._updateTarget(this.monthsTarget, this._months(distance));
      }
      if (this.hasDaysTarget) {
        this._updateTarget(this.daysTarget, this._days(distance));
      }
      if (this.hasHoursTarget) {
        this._updateTarget(this.hoursTarget, this._hours(distance));
      }
      if (this.hasMinutesTarget) {
        this._updateTarget(this.minutesTarget, this._minutes(distance));
      }
      if (this.hasSecondsTarget) {
        this._updateTarget(this.secondsTarget, this._seconds(distance));
      }
    } catch (e) {
      console.error(e);
      this._clearTick();
    }
  }

  _clearTick() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
  }

  _updateTarget(target: HTMLElement, value: string) {
    this._removeTargetIfUnused(target, value);
    target.innerHTML = value;
  }

  _removeTargetIfUnused(target: HTMLElement, value: string) {
    let intValue = Number.parseInt(value);
    if (this._removeUnused) {
      if (intValue === 0 && target.dataset.unused) {
        let number = Number.parseInt(target.dataset.unused);
        if (number < Date.now() - 1000) {
          target.remove();
        }
      } else if (intValue == 0) {
        target.dataset.unused = Date.now().toString();
      } else {
        delete target.dataset.unused;
      }
    }
  }

  _years(duration: Duration): string {
    let unit = duration.years || 0;
    return (unit > 0 ? unit : 0).toString();
  }

  _months(duration: Duration): string {
    let unit = duration.months || 0;
    return (unit > 0 ? unit : 0).toString();
  }

  _days(duration: Duration): string {
    let unit = duration.days || 0;
    return (unit > 0 ? unit : 0).toString();
  }

  _hours(duration: Duration): string {
    let unit = duration.hours || 0;
    let str = (unit > 0 ? unit : 0).toString();
    if (this._padZeros) {
      return str.padStart(2, "0");
    } else {
      return str;
    }
  }

  _minutes(duration: Duration): string {
    let unit = duration.minutes || 0;
    let str = (unit > 0 ? unit : 0).toString();
    if (this._padZeros) {
      return str.padStart(2, "0");
    } else {
      return str;
    }
  }

  _seconds(duration: Duration): string {
    let unit = duration.seconds || 0;
    let str = (unit > 0 ? unit : 0).toString();
    if (this._padZeros) {
      return str.padStart(2, "0");
    } else {
      return str;
    }
  }

}
