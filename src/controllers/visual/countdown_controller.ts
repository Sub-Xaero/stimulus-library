import {Duration, intervalToDuration, isPast} from "date-fns";
import {BaseController} from "../../utilities/base_controller";

export class CountdownController extends BaseController {

  static values = {deadline: String, removeUnused: Boolean};
  static targets = ["years", "months", "days", "hours", "minutes", "seconds"];
  static classes = ["countingDown", "ended"];

  // Values
  declare readonly deadlineValue: string;
  declare readonly removeUnusedValue: boolean;
  declare readonly hasRemoveUnusedValue: boolean;
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
  _interval: null | ReturnType<typeof window.setInterval> = null;

  get _removeUnused(): boolean {
    return this.hasRemoveUnusedValue ? this.removeUnusedValue : false;
  }


  get _deadlineDate() {
    return new Date(this.deadlineValue);
  }

  connect() {
    this._interval = setInterval(this._tick.bind(this), 1000);
    this.addCountingDownClasses();
  }

  disconnect() {
    this._clearTick();
    this.removeCountingDownClasses();
    this.removeEndedClasses();
  }

  deadlineValueChanged() {
    // Countdown had previously ended, restart ticking. Updating mid-tick will just work.
    if (this._interval == null) {
      this._interval = setInterval(this._tick.bind(this), 1000);
    }
  }

  _tick() {
    try {
      const now = new Date();
      let distance: Duration = {};

      if (isPast(this._deadlineDate)) {
        distance = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
        // Countdown has ended, stop ticking
        this._clearTick();
        this.removeCountingDownClasses();
        this.addEndedClasses();
        this.dispatchEvent(this.el, `${this.identifier}:ended`);
      } else {
        distance = intervalToDuration({start: this._deadlineDate, end: now});
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
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _updateTarget(target: HTMLElement, value: number) {
    this._removeTargetIfUnused(target, value);
    target.innerHTML = value.toString();
  }

  _removeTargetIfUnused(target: HTMLElement, value: number) {
    if (this._removeUnused) {
      if (value === 0 && target.dataset.unused) {
        if (Number.parseInt(target.dataset.unused) > Date.now() + 1500) {
          target.remove();
        }
      } else if (value == 0) {
        target.dataset.unused = Date.now().toString();
      } else {
        target.dataset.unused = undefined;
      }
    }
  }

  _years(duration: Duration): number {
    return duration.years || 0;
  }

  _months(duration: Duration): number {
    return duration.months || 0;
  }

  _days(duration: Duration): number {
    return duration.days || 0;
  }

  _hours(duration: Duration): number {
    return duration.hours || 0;
  }

  _minutes(duration: Duration): number {
    return duration.minutes || 0;
  }

  _seconds(duration: Duration): number {
    return duration.seconds || 0;
  }

}
