import {BaseController} from "../../utilities/base_controller";
import {useIntersection} from "../../mixins/use_intersection";
import {EasingFunction, EasingFunctions} from "../../utilities/easingFunctions";

export class TweenNumberController extends BaseController {

  static values = {
    start: Number,
    end: Number,
    duration: Number,
    easing: String,
  };

  declare startValue: number;
  declare readonly hasStartValue: boolean;
  declare endValue: number;
  declare readonly hasEndValue: boolean;
  declare durationValue: number;
  declare readonly hasDurationValue: boolean;
  declare easingValue: keyof typeof EasingFunctions;
  declare readonly hasEasingValue: boolean;

  get start(): number {
    if (this.hasStartValue) {
      return this.startValue;
    } else {
      throw new Error("Required value `start` is missing");
    }
  }

  get end(): number {
    if (this.hasEndValue) {
      return this.endValue;
    } else {
      throw new Error("Required value `end` is missing");
    }
  }

  get durationMs(): number {
    if (this.hasDurationValue) {
      return this.durationValue;
    } else {
      throw new Error("Required value `duration` is missing");
    }
  }

  get easingFunction(): EasingFunction {
    let str = this.hasEasingValue ? this.easingValue : null;
    let fallback = EasingFunctions.linear;
    if (str == null) {
      return fallback;
    }
    // @ts-ignore
    return EasingFunctions[str] || fallback;
  }

  connect() {
    useIntersection(this, this.el, this.appear);
  }

  appear(_entry: IntersectionObserverEntry) {
    this.tween();
  };

  tween(): void {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const elapsed: number = timestamp - startTimestamp;
      const progress: number = Math.min(elapsed / this.durationMs, 1);

      this.element.innerHTML = Math.floor(this.easingFunction(progress) * (this.end - this.start) + this.start).toString();

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step)
  }

}