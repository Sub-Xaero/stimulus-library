import { type Duration } from "date-fns";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { intervalToDuration } from "date-fns/intervalToDuration";
import { isPast } from "date-fns/isPast";
import { toDate } from "date-fns/toDate";
import { BaseController } from "@stimulus-library/utilities";
import { useTimeout } from "@stimulus-library/mixins";

export class TimeDistanceController extends BaseController {
  static values = {
    timestamp: Number,
  };

  declare timestampValue: number;
  declare readonly hasTimestampValue: boolean;

  declare _timestamp: Date;

  get _duration(): Duration {
    return isPast(this._timestamp) ? intervalToDuration({ start: this._timestamp, end: new Date() }) : intervalToDuration({ start: new Date(), end: this._timestamp });
  }

  get _nextUpdate(): number | null {
    const duration = this._duration;

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

  connect() {
    if (!this.hasTimestampValue) {
      throw new Error("Expected `timestampValue` to be present");
    }
    this._update();
  }

  _update() {
    this.el.innerHTML = formatDistanceToNow(this._timestamp, {
      addSuffix: true,
      includeSeconds: true,
    });

    if (this._nextUpdate) {
      useTimeout(this, this._update, this._nextUpdate);
    }
  }
}
