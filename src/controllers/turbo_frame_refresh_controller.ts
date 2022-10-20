import {BaseController} from "../utilities/base_controller";
import {isTurboFrame} from "../utilities/turbo";
import {useTimeout} from "../mixins/use_timeout";

// noinspection SillyAssignmentJS
export class TurboFrameRefreshController extends BaseController {

  static values = {
    interval: Number,
    poll: Boolean,
  };

  declare readonly intervalValue: number;
  declare readonly pollValue: boolean;
  declare readonly hasPollValue: boolean;

  get _poll(): boolean {
    return this.hasPollValue ? this.pollValue : false;
  }

  connect() {
    let element = this.el;
    if (isTurboFrame(element)) {
      if (!!element.src) {
        throw new Error('The provided <turbo-frame> element has no `src` attribute.');
      }
    } else {
      throw new Error('Expected controller to be mounted on a <turbo-frame> element.');
    }
    if (this._poll) {
      requestAnimationFrame(() => useTimeout(this, this.refresh, this.intervalValue));
    }
  }

  refresh(event?: Event) {
    event?.preventDefault();
    let element = this.el as TurboFrame;
    // @ts-ignore
    element.reload();
  }

}
