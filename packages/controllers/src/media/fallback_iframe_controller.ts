import { BaseController } from "@stimulus-library/utilities";

export class FallbackIframeController extends BaseController {

  static values = { placeholder: String };
  static classes = ["success", "fail"];

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;
  declare addSuccessClasses: (el?: HTMLElement) => void;
  declare removeSuccessClasses: (el?: HTMLElement) => void;
  declare addFailClasses: (el?: HTMLElement) => void;
  declare removeFailClasses: (el?: HTMLElement) => void;

  initialize() {
    this._success = this._success.bind(this);
    this._fail = this._fail.bind(this);
  }

  connect() {
    const element = this.el as HTMLIFrameElement;
    element.onerror = this._fail;
  }

  disconnect() {
    this.removeSuccessClasses();
    this.removeFailClasses();
  }

  private _success() {
    this.addSuccessClasses();
  }

  private _fail() {
    const element = this.el as HTMLIFrameElement;
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

}
