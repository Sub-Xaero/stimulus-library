import { BaseController, EasingFunction, EasingFunctions } from "@stimulus-library/utilities";
import { useIntersection } from "@stimulus-library/mixins";

export class TweenNumberController extends BaseController {

  static values = {
    start: Number,
    end: Number,
    duration: Number,
    easing: String,
    formatting: {
      type: Object,
      default: {},
    },
  };

  declare startValue: number;
  declare readonly hasStartValue: boolean;
  declare endValue: number;
  declare readonly hasEndValue: boolean;
  declare durationValue: number;
  declare readonly hasDurationValue: boolean;
  declare easingValue: keyof typeof EasingFunctions;
  declare readonly hasEasingValue: boolean;

  declare formattingValue: Intl.NumberFormatOptions;
  declare formatter: Intl.NumberFormat;
  declare readonly hasFormattingValue: boolean;

  private observer?: IntersectionObserver;
  private observe?: () => void;
  private unobserve?: () => void;
  private teardownObserver?: () => void;

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
    const str = this.hasEasingValue ? this.easingValue : null;
    const fallback = EasingFunctions.linear;
    if (str == null) {
      return fallback;
    }
    // @ts-ignore
    return EasingFunctions[str] || fallback;
  }

  connect() {
    const {
      observer,
      observe,
      unobserve,
      teardown,
    } = useIntersection(this, this.el, this.appear);
    this.observer = observer;
    this.observe = observe;
    this.unobserve = unobserve;
    this.teardownObserver = teardown;
    this.formatter = new Intl.NumberFormat(
      Intl.NumberFormat().resolvedOptions().locale,
      this.formattingValue,
    );
  }

  appear(_entry: IntersectionObserverEntry) {
    this.tween();
  }

  tween(): void {
    let startTimestamp: number | null = null;

    const self = this;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const elapsed: number = timestamp - startTimestamp;
      const progress: number = Math.min(elapsed / this.durationMs, 1);

      this.element.innerHTML = this.formatter.format(
        Math.floor(this.easingFunction(progress) * (this.end - this.start) + this.start),
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        self.unobserve?.();
        self.teardownObserver?.();
      }
    };

    requestAnimationFrame(step);
  }

}
