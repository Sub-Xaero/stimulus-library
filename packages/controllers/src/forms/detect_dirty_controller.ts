import { BaseController, getOtherRadiosInGroup, isElementCheckable, isHTMLInputElement, isHTMLSelectElement } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

export class DetectDirtyController extends BaseController {

  get _cacheAttrName(): string {
    return 'detect-dirty-load-value';
  }

  connect() {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    this._cacheLoadValues();
    this._checkDirty();
    useEventListener(this, element, ["input", "change"], this._checkDirty, {debounce: 10});
  }

  restore(event?: Event) {
    event?.preventDefault();
    this._restoreElementFromLoadValue();
  }

  private _getElementValue(): boolean | string {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    return isElementCheckable(element) ? element.checked : element.value;
  }

  private _getElementLoadValue(): boolean | string {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    let value = element.getAttribute(this._cacheAttrName);
    if (isElementCheckable(element)) {
      return value == null ? element.defaultChecked : value == "true";
    } else if (isHTMLSelectElement(element)) {
      let options = Array.from(element.options);
      options.forEach((option) => {
        if (option.defaultSelected) {
          element.value = option.value;
          return option.value;
        }
      });
    } else if (value !== null) {
      return value;
    }

    return value!;
  }

  private _elementHasCachedLoadValue(): boolean {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    return element.hasAttribute(this._cacheAttrName);
  }

  private _checkDirty() {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (isHTMLInputElement(element) && element.type == "radio") {
      getOtherRadiosInGroup(element).forEach((radio) => radio.removeAttribute('data-dirty'));
    }
    if (this._isElementDirty()) {
      element.setAttribute('data-dirty', "true");
    } else {
      element.removeAttribute('data-dirty');
    }
  }

  private _isElementDirty(): boolean {
    return this._getElementValue() !== this._getElementLoadValue();
  }

  private _restoreElementFromLoadValue() {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    let cacheValue = element.getAttribute(this._cacheAttrName);

    if (isElementCheckable(element)) {
      element.setAttribute(this._cacheAttrName, element.checked.toString());
      element.checked = cacheValue == null ? element.defaultChecked : cacheValue == "true";
    } else if (isHTMLSelectElement(element)) {
      if (cacheValue == null) {
        let options = Array.from(element.options);
        options.forEach((option) => {
          if (option.defaultSelected) {
            element.value = option.value;
            return;
          }
        });
      } else {
        element.value = cacheValue;
      }

    } else {
      element.value = cacheValue == null ? element.defaultValue : cacheValue;
    }
  }

  private _cacheLoadValues(): void {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!this._elementHasCachedLoadValue() && isElementCheckable(element)) {
      element.setAttribute(this._cacheAttrName, element.checked.toString());
    } else {
      element.setAttribute(this._cacheAttrName, element.value.toString());
    }
  }
}

export function isDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
