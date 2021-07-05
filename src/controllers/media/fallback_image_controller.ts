import {BaseController} from "../../utilities/base_controller";

export class FallbackImageController extends BaseController {

  static values = {placeholder: String};
  static classes = ["success", "fail"];

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;
  declare readonly successClass: string;
  declare readonly hasSuccessClass: boolean;
  declare readonly failClass: string;
  declare readonly hasFailClass: boolean;

  get _successClasses(): string[] {
    return this.successClass.split(' ');
  }

  get _defaultSuccessClasses(): string[] {
    return [];
  }

  get _failClasses(): string[] {
    return this.failClass.split(' ');
  }

  get _defaultFailClasses(): string[] {
    return [];
  }

  initialize() {
    this._hasLoadedSuccessfully = this._hasLoadedSuccessfully.bind(this);
    this._success = this._success.bind(this);
    this._fail = this._fail.bind(this);
  }

  connect() {
    let element = this.el as HTMLImageElement;

    element.onerror = this._fail;
    if (element.complete && !this._hasLoadedSuccessfully()) {
      this._fail();
    } else {
      this._success();
    }
  }

  disconnect() {
    this._removeSuccessClasses();
    this._removeFailClasses();
  }

  private _success() {
    this._addSuccessClasses();
  }

  private _fail() {
    let element = this.el as HTMLImageElement;
    this._addFailClasses();

    if (this.hasPlaceholderValue && element.src !== this.placeholderValue) {
      this.dispatch(element, "fallback-image:placeholder");
      element.src = this.placeholderValue;
      element.onerror = this._fail;
    } else {
      this.dispatch(element, "fallback-image:fail");
      element.style.display = "none";
    }
  }

  private _hasLoadedSuccessfully(): boolean {
    let element = this.el as HTMLImageElement;
    return element.naturalHeight > 0 && element.naturalWidth > 0;
  }

  private _addFailClasses(el: HTMLElement = this.el) {
    if (this.hasFailClass) {
      el.classList.add(...this._failClasses);
    } else {
      el.classList.add(...this._defaultFailClasses);
    }
  }

  private _removeFailClasses(el: HTMLElement = this.el) {
    if (this.hasFailClass) {
      el.classList.remove(...this._failClasses);
    } else {
      el.classList.remove(...this._defaultFailClasses);
    }
  }

  private _addSuccessClasses(el: HTMLElement = this.el) {
    if (this.hasSuccessClass) {
      el.classList.add(...this._successClasses);
    } else {
      el.classList.add(...this._defaultSuccessClasses);
    }
  }

  private _removeSuccessClasses(el: HTMLElement = this.el) {
    if (this.hasSuccessClass) {
      el.classList.remove(...this._successClasses);
    } else {
      el.classList.remove(...this._defaultSuccessClasses);
    }
  }

}
