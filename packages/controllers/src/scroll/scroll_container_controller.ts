import { BaseController, scrollAbsoluteBottom, scrollAbsoluteLeft, scrollAbsoluteTop, scrollDown, scrollLeft, scrollRight, scrollUp } from "@stimulus-library/utilities";

export class ScrollContainerController extends BaseController {

  static values = {
    behaviour: String,
    increment: Number,
  };

  declare readonly behaviourValue: ScrollBehavior;
  declare readonly hasBehaviourValue: boolean;

  declare readonly incrementValue: number;
  declare readonly hasIncrementValue: boolean;

  get _increment(): number {
    return this.hasIncrementValue ? this.incrementValue : 50;
  }

  get _behaviour(): ScrollBehavior {
    if (this.hasBehaviourValue) {
      if (["auto", "smooth"].includes(this.behaviourValue)) {
        return this.behaviourValue;
      } else {
        throw new Error(`'${this.behaviourValue}' is not a recognised scroll behaviour`);
      }
    } else {
      return "auto";
    }
  }

  async scrollTop(event?: Event) {
    event?.preventDefault();
    await scrollAbsoluteTop(this.el, { behavior: this._behaviour });
  }

  async scrollBottom(event?: Event) {
    event?.preventDefault();
    await scrollAbsoluteBottom(this.el, { behavior: this._behaviour });
  }

  async scrollLeft(event?: Event) {
    event?.preventDefault();
    await scrollAbsoluteLeft(this.el, { behavior: this._behaviour });
  }

  async scrollRight(event?: Event) {
    event?.preventDefault();
    await scrollAbsoluteLeft(this.el, { behavior: this._behaviour });
  }

  async up(event?: Event) {
    event?.preventDefault();
    await scrollUp(this.el, this._increment, { behavior: this._behaviour });
  }

  async down(event?: Event) {
    event?.preventDefault();
    await scrollDown(this.el, this._increment, { behavior: this._behaviour });
  }

  async left(event?: Event) {
    event?.preventDefault();
    await scrollLeft(this.el, this._increment, { behavior: this._behaviour });
  }

  async right(event?: Event) {
    event?.preventDefault();
    await scrollRight(this.el, this._increment, { behavior: this._behaviour });
  }
}

