import {BaseController} from "../utilities/base_controller";
import {useEventListener} from "../mixins/use_event_listener";

export class AnchorSpyController extends BaseController {
  static values = {key: String};
  static classes = ["active", "inactive"];

  declare readonly activeClass: string;
  declare readonly hasActiveClass: boolean;
  declare readonly inactiveClass: string;
  declare readonly hasInactiveClass: boolean;
  declare readonly keyValue: string;

  get _activeClasses(): string[] {
    return this.activeClass.split(' ');
  }

  get _defaultActiveClasses(): string[] {
    return ["active"];
  }

  get _inactiveClasses(): string[] {
    return this.inactiveClass.split(' ');
  }

  get _defaultInactiveClasses(): string[] {
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
    requestAnimationFrame(() => {
      this._checkAnchor();
      useEventListener(this, window, 'hashchange', this._checkAnchor);
    });
  }

  write(event?: Event) {
    event?.preventDefault();
    this._anchor = this._key;
  }

  private _addActiveClasses(el: HTMLElement = this.el) {
    if (this.hasActiveClass) {
      el.classList.add(...this._activeClasses);
    } else {
      el.classList.add(...this._defaultActiveClasses);
    }
  }

  private _removeActiveClasses(el: HTMLElement = this.el) {
    if (this.hasActiveClass) {
      el.classList.remove(...this._activeClasses);
    } else {
      el.classList.remove(...this._defaultActiveClasses);
    }
  }

  private _addInactiveClasses(el: HTMLElement = this.el) {
    if (this.hasInactiveClass) {
      el.classList.add(...this._inactiveClasses);
    } else {
      el.classList.add(...this._defaultInactiveClasses);
    }
  }

  private _removeInactiveClasses(el: HTMLElement = this.el) {
    if (this.hasInactiveClass) {
      el.classList.remove(...this._inactiveClasses);
    } else {
      el.classList.remove(...this._defaultInactiveClasses);
    }
  }

  private _checkAnchor() {
    if (this._key === this._anchor) {
      this.dispatch(this.el, "anchor-spy:active");
      this._addActiveClasses(this.el);
      this._removeInactiveClasses(this.el);
    } else {
      this.dispatch(this.el, "anchor-spy:inactive");
      this._addInactiveClasses(this.el);
      this._removeActiveClasses(this.el);
    }
  }
}
