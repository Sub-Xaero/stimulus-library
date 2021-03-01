import {BaseController} from './base_controller';
import {isHTMLFormElement, isHTMLInputElement} from "./utilities/elements";

interface FormSavePayload {
  [idx: string]: {
    [idx: string]: string | boolean
  }
}

export class FormSaveController extends BaseController {

  static values = {
    id: String,
    restoreOnLoad: Boolean,
    clearOnSubmit: Boolean,
  };

  declare readonly idValue: string;
  declare readonly hasIdValue: boolean;
  declare readonly restoreOnLoadValue: boolean;
  declare readonly hasRestoreOnLoadValue: boolean;
  declare readonly clearOnSubmitValue: boolean;
  declare readonly hasClearOnSubmitValue: boolean;

  get formID() {
    if (this.hasIdValue) {
      return this.idValue;
    }
    let elementID = (this.element as HTMLFormElement).id;

    if (elementID !== "") {
      return elementID;
    } else {
      throw new Error(`No ID value to uniquely identify this form. Please either specify data-${this.identifier}-id-value or give this form an 'id' attribute. `);
    }
  }

  get formIdentifier() {
    const url = location.href;
    return `${url} ${this.formID}`;
  }

  get formElements() {
    return (this.element as HTMLFormElement).elements;
  }

  get formData(): FormSavePayload {
    let data: FormSavePayload = {[this.formIdentifier]: {}};
    for (const element of this.formElements) {
      let el = element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.name.length > 0) {
        if (isHTMLInputElement(el) && el.type == "checkbox") {
          data[this.formIdentifier][el.name] = el.checked;
        } else if (isHTMLInputElement(el) && el.type == "radio") {
          if (el.checked) {
            data[this.formIdentifier][el.name] = el.value;
          }
        } else {
          data[this.formIdentifier][el.name] = el.value;
        }
      }
    }
    return data;
  }

  get restoreOnLoad() {
    return this.hasRestoreOnLoadValue ? this.restoreOnLoadValue : true;
  }

  get clearOnSubmit() {
    return this.hasClearOnSubmitValue ? this.clearOnSubmitValue : true;
  }

  initialize() {
    this._clear = this._clear.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      let element = this.element;
      if (!isHTMLFormElement(element)) {
        throw new Error('Expected controller to be mounted on a form element.');
      }

      if (this.restoreOnLoad) {
        this.restore();
      }
      if (this.clearOnSubmit) {
        this.element.addEventListener('submit', this._clear);
      }
    });
  }

  disconnect() {
    if (this.clearOnSubmit) {
      this.element.removeEventListener('submit', this._clear);
    }
  }

  _clear() {
    localStorage.removeItem(this.formIdentifier);
    this.dispatch(this.element as HTMLElement, `form-save:cleared`);
  }

  clear(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this._clear();
  }

  save(event: Event) {
    event.preventDefault();
    let data = this.formData;
    localStorage.setItem(this.formIdentifier, JSON.stringify(data[this.formIdentifier]));
    this.dispatch(this.element as HTMLElement, `form-save:save:success`);
  }

  restore(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (localStorage.getItem(this.formIdentifier)) {
      const savedData = JSON.parse(localStorage.getItem(this.formIdentifier)!); // get and parse the saved data from localStorage
      for (const element of this.formElements) {
        let el = element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        if (el.name in savedData) {
          if (isHTMLInputElement(el) && el.type == "checkbox") {
            el.checked = savedData[el.name];
          } else if (isHTMLInputElement(el) && el.type == "radio") {
            if (el.value == savedData[el.name]) {
              el.checked = true;
            }
          } else {
            el.value = savedData[el.name];
          }
        }
      }
      this.dispatch(this.element as HTMLElement, `form-save:restore:success`);
    } else {
      this.dispatch(this.element as HTMLElement, `form-save:restore:empty`);
    }
  }

}
