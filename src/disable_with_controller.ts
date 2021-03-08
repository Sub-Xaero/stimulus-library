import {BaseController} from './base_controller';
import {isHTMLAnchorElement, isHTMLButtonElement, isHTMLInputElement} from "./utilities/elements";

export class DisableWithController extends BaseController {

  static values = {
    message: String,
    timeout: Number,
  };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;
  declare readonly timeoutValue: number;
  declare readonly hasTimeoutValue: boolean;

  _cacheText?: string;
  _timeoutHandle?: ReturnType<typeof window.setTimeout>;

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : 'Submitting...';
  }

  get _timeout(): number {
    return this.hasTimeoutValue ? this.timeoutValue : 1000;
  }

  initialize() {
    this.enable = this.enable.bind(this);
    this.disable = this.disable.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this.el.addEventListener("click", this.disable);
    });
  }

  disconnect() {
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }

  disable(event?: Event) {
    let element = this.el;

    if (this._isDisabled(element)) {
      event?.preventDefault();
      event?.stopImmediatePropagation();
    } else {
      this._cacheText = this._getElText(element);
      this._setElText(element, this._message);
      this._disable(element);
      setTimeout(this.enable, this._timeout);
    }
  }

  enable(event?: Event) {
    event?.preventDefault();
    let element = this.el;
    if (this._isDisabled(element)) {
      this._setElText(element, this._cacheText!);
      this._enable(element);
    }
  }

  _isDisabled(el: HTMLElement): boolean {
    if ((isHTMLInputElement(el) && el.type == "submit") || isHTMLButtonElement(el)) {
      return el.disabled;
    } else {
      return el.dataset.disabled == "true";
    }
  }

  _getElText(el: HTMLElement): string {
    if (isHTMLInputElement(el) && el.type == "submit") {
      return el.value;
    } else {
      return el.innerText;
    }
  }

  _setElText(el: HTMLElement, str: string) {
    if (isHTMLInputElement(el) && el.type == "submit") {
      el.value = str;
    } else if (isHTMLButtonElement(el) || isHTMLAnchorElement(el)) {
      el.innerText = str;
    }
  }

  _disable(el: HTMLElement) {
    if ((isHTMLInputElement(el) && el.type == "submit") || isHTMLButtonElement(el)) {
      el.disabled = true;
    } else {
      el.dataset.disabled = "true";
    }
  }

  _enable(el: HTMLElement) {
    if (isHTMLInputElement(el) && el.type == "submit" || isHTMLButtonElement(el)) {
      el.disabled = false;
    } else {
      el.dataset.disabled = undefined;
    }
  }

}
