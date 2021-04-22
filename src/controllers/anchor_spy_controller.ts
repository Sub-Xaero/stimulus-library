import {BaseController} from "../utilities/base_controller";

export class AnchorSpyController extends BaseController {
  static values = {key: String};

  declare readonly keyValue: string;

  get key(): string {
    return this.keyValue.replaceAll('#', '');
  }

  get anchor(): string {
    return window.location.hash.substr(1);
  }

  set anchor(value: string) {
    window.location.hash = value;
  }

  initialize() {
    this._checkAnchor = this._checkAnchor.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this._checkAnchor();
      window.addEventListener("hashchange", this._checkAnchor);
    });
  }

  disconnect() {
    window.removeEventListener("hashchange", this._checkAnchor);
  }

  write(event?: Event) {
    event?.preventDefault();
    this.anchor = this.key;
  }

  private _checkAnchor() {
    if (this.key === this.anchor) {
      this.dispatch(this.el, "anchor-spy:active");
    } else {
      this.dispatch(this.el, "anchor-spy:inactive");
    }
  }
}
