import {BaseController} from "../utilities/base_controller";
import {isTurboFrame} from "../utilities/turbo";

// noinspection SillyAssignmentJS
export class TurboFrameRefreshController extends BaseController {

  static values = {
    interval: Number,
    poll: Boolean,
  };

  declare readonly intervalValue: number;
  declare readonly pollValue: boolean;
  declare readonly hasPollValue: boolean;
  _timeoutHandle: null | ReturnType<typeof window.setTimeout> = null;

  get _poll(): boolean {
    return this.hasPollValue ? this.pollValue : false;
  }

  initialize() {
    this.refresh = this.refresh.bind(this);
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
      requestAnimationFrame(() => this._timeoutHandle = setTimeout(() => this.refresh(), this.intervalValue));
    }
  }

  disconnect() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }

  refresh(event?: Event) {
    event?.preventDefault();
    let element = this.el as TurboFrame;
    element.src = element.src;
  }

}
