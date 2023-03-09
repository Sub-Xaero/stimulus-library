import { BaseController } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

export class UserFocusController extends BaseController {

  connect() {
    useEventListener(this, window, ["focus", "blur"], this._handleVisibility);
    useEventListener(this, document, "visibilitychange", this._handleVisibility);
    requestAnimationFrame(() => {
      this._handleVisibility();
    });
  }

  appear() {
    this.dispatchEvent(this.el, this.eventName("active"));
  }

  away() {
    this.dispatchEvent(this.el, this.eventName("away"));
  }

  private _handleVisibility() {
    this._documentIsActive() ? this.appear() : this.away();
  }

  private _documentIsActive() {
    return document.visibilityState == "visible" && document.hasFocus();
  }

}
