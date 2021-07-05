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

  get successClasses(): string[] {
    return this.successClass.split(' ');
  }

  get failClasses(): string[] {
    return this.failClass.split(' ');
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

  private _applySuccessClasses() {
    if (this.hasSuccessClass) {
      this.el.classList.add(...this.successClasses);
    }
  }

  private _removeSuccessClasses() {
    if (this.hasSuccessClass) {
      this.el.classList.remove(...this.successClasses);
    }
  }

  private _applyFailClasses() {
    if (this.hasFailClass) {
      this.el.classList.add(...this.failClasses);
    }
  }

  private _removeFailClasses() {
    if (this.hasFailClass) {
      this.el.classList.remove(...this.failClasses);
    }
  }

  private _success() {
    this._applySuccessClasses();
  }

  private _fail() {
    let element = this.el as HTMLImageElement;
    this._applyFailClasses();

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
}
