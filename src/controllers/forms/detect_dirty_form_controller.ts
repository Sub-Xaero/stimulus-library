import {BaseController} from "../../utilities/base_controller";
import {isElementCheckable, isHTMLSelectElement} from "../../utilities/elements";
import {useEventListener} from "../../mixins/use_event_listener";

export class DetectDirtyFormController extends BaseController {

  get _formElements(): Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
    return Array.from(this.el.querySelectorAll('input, select, textarea'));
  }

  get _cacheAttrName(): string {
    return 'detect-dirty-load-value';
  }

  connect() {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    this._cacheLoadValues();
    this._checkDirty();
    useEventListener(this, element, ["input", "change"], this._checkDirty);
  }

  restore(event?: Event) {
    event?.preventDefault();
    this._formElements.forEach(element => this._restoreElementFromLoadValue(element));
  }

  private _getElementValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean | string {
    return isElementCheckable(element) ? element.checked : element.value;
  }

  private _getElementLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean | string {
    let value = element.getAttribute(this._cacheAttrName);
    if (isElementCheckable(element)) {
      return value == null ? element.defaultChecked : value == "true";
    } else if (value !== null) {
      return value;
    }

    if (isHTMLSelectElement(element)) {
      let options = Array.from(element.options);
      options.forEach((option) => {
        if (option.defaultSelected) {
          element.value = option.value;
          return option.value;
        }
      });
    }

    return value!;
  }

  private _elementHasCachedLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
    return element.hasAttribute(this._cacheAttrName);
  }

  private _checkElementDirty(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    if (this._isElementDirty(element)) {
      element.setAttribute('data-dirty', "true");
    } else {
      element.removeAttribute('data-dirty');
    }
  }

  private _isElementDirty(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
    return this._getElementValue(element) !== this._getElementLoadValue(element);
  }

  private _cacheElementLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    if (!this._elementHasCachedLoadValue(element) && isElementCheckable(element)) {
      element.setAttribute(this._cacheAttrName, element.checked.toString());
    } else {
      element.setAttribute(this._cacheAttrName, element.value.toString());
    }
  }

  private _restoreElementFromLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
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
    this._formElements.forEach(el => this._cacheElementLoadValue(el));
  }

  private _checkDirty(): void {
    this._formElements.forEach(el => this._checkElementDirty(el));
    if (this._formElements.some(el => isFormDirty(el))) {
      this.el.setAttribute("data-dirty", "true");
    } else {
      this.el.removeAttribute("data-dirty");
    }
  }
}

export function isFormDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
