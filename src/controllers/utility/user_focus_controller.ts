import {BaseController} from "../../utilities/base_controller";
import {useEventListener, useEventListeners} from "../../mixins/use_event_listener";

export class UserFocusController extends BaseController {

  connect() {
    useEventListeners(this, window, ["focus", "blur"], this._handleVisibility);
    useEventListener(this, document, "visibilitychange", this._handleVisibility);
    requestAnimationFrame(() => {
      this._handleVisibility();
    });
  }

  appear() {
    this.dispatch(this.el, "user-focus:active");
  }

  away() {
    this.dispatch(this.el, "user-focus:away");
  }

  private _handleVisibility() {
    this._documentIsActive() ? this.appear() : this.away();
  }

  private _documentIsActive() {
    return document.visibilityState == "visible" && document.hasFocus();
  }

}
