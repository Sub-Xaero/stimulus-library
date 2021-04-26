import {BaseController} from "../../utilities/base_controller";
import {Duration, formatDistanceToNow, intervalToDuration, isPast, toDate} from "date-fns";

export class TimeDistanceController extends BaseController {
  static values = {
    timestamp: Number,
  };

  declare timestampValue: number;
  declare readonly hasTimestampValue: boolean;

  _timeout: number | null = null;
  declare _timestamp: Date;

  get _duration(): Duration {
    return isPast(this._timestamp) ? intervalToDuration({start: this._timestamp, end: new Date()}) : intervalToDuration({start: new Date(), end: this._timestamp});
  }

  get _nextUpdate(): number | null {
    let duration = this._duration;

    if (duration.years && duration.years > 0) {
      return null;
    } else if (duration.months && duration.months > 0) {
      return null;
    } else if (duration.days && duration.days > 0) {
      return null;
    } else if (duration.hours && duration.hours > 0) {
      return 1800000; // Update every 30 mins
    } else {
      return 30000; // Update every 30 seconds
    }
  }

  timestampValueChanged() {
    this._timestamp = toDate(this.timestampValue * 1000);
  }

  initialize() {
    this._update = this._update.bind(this);
  }

  connect() {
    if (!this.hasTimestampValue) {
      throw new Error("Expected `timestampValue` to be present");
    }
    this._update();
  }

  disconnect() {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }
  }

  _update() {
    this.el.innerHTML = formatDistanceToNow(this._timestamp, {
      addSuffix: true,
      includeSeconds: true,
    });

    if (this._nextUpdate) {
      this._timeout = window.setTimeout(this._update, this._nextUpdate);
    }
  }
}
