import {BaseController} from "../../utilities/base_controller";
import {useIntersection} from "../../mixins/use_intersection";
import {dispatchEvent} from "../../utilities/events";

export class IntersectionController extends BaseController {

  static values = {threshold: String};

  declare readonly isVisible: boolean;
  declare readonly thresholdValue: string;
  declare readonly hasThresholdValue: boolean;

  get _threshold(): number[] {
    if (this.hasThresholdValue) {
      return this.thresholdValue.split(',').map(val => Number.parseFloat(val.trim())).filter(val => val >= 0 && val <= 1);
    } else {
      return [0, 1];
    }
  }

  connect() {
    useIntersection(this, this.el, this.appear, this.disappear, {threshold: this._threshold});
  }

  appear(entry: IntersectionObserverEntry) {
    dispatchEvent(this, this.el, this.eventName("appear"));
  };

  disappear(entry: IntersectionObserverEntry) {
    dispatchEvent(this, this.el, this.eventName("disappear"));
  };

}
