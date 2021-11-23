import {BaseController} from '../utilities/base_controller';
import {isHTMLAnchorElement, isHTMLButtonElement, isHTMLInputElement} from "../utilities/elements";
import {useEventListener} from "../mixins/use_event_listener";
import {useTimeout} from "../mixins/use_timeout";

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

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : 'Submitting...';
  }

  get _timeout(): number {
    return this.hasTimeoutValue ? this.timeoutValue : 1000;
  }

  connect() {
    requestAnimationFrame(() => {
      useEventListener(this, this.el, ["click"], this.disable);
      useEventListener(this, window, ["turbo:load", "turbolinks:load"], this._enable);
    });
  }

  disable(event?: Event) {
    let element = this.el;

    if (this._isDisabled(element)) {
      event?.preventDefault();
      event?.stopImmediatePropagation();
    } else {
      this._cacheText = this._getElText(element);
      this._setElText(element, this._message);
      this._disable();
      useTimeout(this, this.enable, this._timeout);
    }
  }

  enable(event?: Event) {
    event?.preventDefault();
    let element = this.el;
    if (this._isDisabled(element)) {
      this._setElText(element, this._cacheText!);
      this._enable();
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

  _disable() {
    let el = this.el;
    if ((isHTMLInputElement(el) && el.type == "submit") || isHTMLButtonElement(el)) {
      el.disabled = true;
    } else {
      el.dataset.disabled = "true";
    }
  }

  _enable() {
    let el = this.el;
    if (isHTMLInputElement(el) && el.type == "submit" || isHTMLButtonElement(el)) {
      el.disabled = false;
    } else {
      el.dataset.disabled = undefined;
    }
  }

}
