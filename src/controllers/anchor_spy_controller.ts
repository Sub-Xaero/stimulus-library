import {BaseController} from "../utilities/base_controller";
import {useEventListener} from "../mixins/use_event_listener";

export class AnchorSpyController extends BaseController {
  static values = {key: String};

  declare readonly keyValue: string;

  get _key(): string {
    return this.keyValue.replaceAll('#', '');
  }

  get _anchor(): string {
    return window.location.hash.substr(1);
  }

  set _anchor(value: string) {
    window.location.hash = value;
  }

  connect() {
    requestAnimationFrame(() => {
      this._checkAnchor();
      useEventListener(this, window, 'hashchange', this._checkAnchor);
    });
  }

  write(event?: Event) {
    event?.preventDefault();
    this._anchor = this._key;
  }

  private _checkAnchor() {
    if (this._key === this._anchor) {
      this.dispatch(this.el, "anchor-spy:active");
    } else {
      this.dispatch(this.el, "anchor-spy:inactive");
    }
  }
}
