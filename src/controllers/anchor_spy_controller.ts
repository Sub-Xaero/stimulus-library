import {BaseController} from "../utilities/base_controller";
import {useEventListener} from "../mixins/use_event_listener";
import {installClassMethods} from "../mixins/install_class_methods";

export class AnchorSpyController extends BaseController {
  static values = {key: String};
  static classes = ["active", "inactive"];

  declare readonly keyValue: string;
  declare addActiveClasses: (el?: HTMLElement) => void;
  declare removeInactiveClasses: (el?: HTMLElement) => void;
  declare addInactiveClasses: (el?: HTMLElement) => void;
  declare removeActiveClasses: (el?: HTMLElement) => void;

  get defaultActiveClasses(): string[] {
    return ["active"];
  }

  get defaultInactiveClasses(): string[] {
    return ["inactive"];
  }

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
    installClassMethods(this);
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
      this.dispatchEvent(this.el, "anchor-spy:active");
      this.addActiveClasses(this.el);
      this.removeInactiveClasses(this.el);
    } else {
      this.dispatchEvent(this.el, "anchor-spy:inactive");
      this.addInactiveClasses(this.el);
      this.removeActiveClasses(this.el);
    }
  }
}
