import { BaseController } from "@stimulus-library/utilities";

export class FallbackImageController extends BaseController {

  static values = { placeholder: String };
  static classes = ["success", "fail"];

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;
  declare addSuccessClasses: (el?: HTMLElement) => void;
  declare removeSuccessClasses: (el?: HTMLElement) => void;
  declare addFailClasses: (el?: HTMLElement) => void;
  declare removeFailClasses: (el?: HTMLElement) => void;


  initialize() {
    this._hasLoadedSuccessfully = this._hasLoadedSuccessfully.bind(this);
    this._success = this._success.bind(this);
    this._fail = this._fail.bind(this);
  }

  connect() {
    const element = this.el as HTMLImageElement;

    element.onerror = this._fail;
    if (element.complete && !this._hasLoadedSuccessfully()) {
      this._fail();
    } else {
      this._success();
    }
  }

  disconnect() {
    this.removeSuccessClasses();
    this.removeFailClasses();
  }

  private _success() {
    this.addSuccessClasses();
  }

  private _fail() {
    const element = this.el as HTMLImageElement;
    this.addFailClasses();

    if (this.hasPlaceholderValue && element.src !== this.placeholderValue) {
      this.dispatchEvent(element, this.eventName("placeholder"));
      element.src = this.placeholderValue;
      element.onerror = this._fail;
    } else {
      this.dispatchEvent(element, this.eventName("fail"));
      element.style.display = "none";
    }
  }

  private _hasLoadedSuccessfully(): boolean {
    const element = this.el as HTMLImageElement;
    return element.naturalHeight > 0 && element.naturalWidth > 0;
  }

}
