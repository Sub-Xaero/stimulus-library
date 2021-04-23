import {BaseController} from '../utilities/base_controller';
import {isHTMLFormElement, isHTMLInputElement} from "../utilities/elements";

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

  get _formID() {
    if (this.hasIdValue) {
      return this.idValue;
    }
    let elementID = (this.el as HTMLFormElement).id;

    if (elementID !== "") {
      return elementID;
    } else {
      throw new Error(`No ID value to uniquely identify this form. Please either specify data-${this.identifier}-id-value or give this form an 'id' attribute. `);
    }
  }

  get _formIdentifier() {
    const url = location.href;
    return `${url} ${this._formID}`;
  }

  get _formElements() {
    return (this.el as HTMLFormElement).elements;
  }

  get _formData(): FormSavePayload {
    let data: FormSavePayload = {[this._formIdentifier]: {}};
    for (const element of this._formElements) {
      let el = element as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      if (el.name.length > 0) {
        if (isHTMLInputElement(el) && el.type == "checkbox") {
          data[this._formIdentifier][el.name] = el.checked;
        } else if (isHTMLInputElement(el) && el.type == "radio") {
          if (el.checked) {
            data[this._formIdentifier][el.name] = el.value;
          }
        } else {
          data[this._formIdentifier][el.name] = el.value;
        }
      }
    }
    return data;
  }

  get _restoreOnLoad() {
    return this.hasRestoreOnLoadValue ? this.restoreOnLoadValue : true;
  }

  get _clearOnSubmit() {
    return this.hasClearOnSubmitValue ? this.clearOnSubmitValue : true;
  }

  initialize() {
    this._clear = this._clear.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      let element = this.el;
      if (!isHTMLFormElement(element)) {
        throw new Error('Expected controller to be mounted on a form element.');
      }

      if (this._restoreOnLoad) {
        this.restore();
      }
      if (this._clearOnSubmit) {
        this.el.addEventListener('submit', this._clear);
      }
    });
  }

  disconnect() {
    if (this._clearOnSubmit) {
      this.el.removeEventListener('submit', this._clear);
    }
  }

  _clear() {
    localStorage.removeItem(this._formIdentifier);
    this.dispatch(this.el, `form-save:cleared`);
  }

  clear(event?: Event) {
    event?.preventDefault();
    this._clear();
  }

  save(event: Event) {
    event.preventDefault();
    let data = this._formData;
    localStorage.setItem(this._formIdentifier, JSON.stringify(data[this._formIdentifier]));
    this.dispatch(this.el, `form-save:save:success`);
  }

  restore(event?: Event) {
    event?.preventDefault();
    if (localStorage.getItem(this._formIdentifier)) {
      const savedData = JSON.parse(localStorage.getItem(this._formIdentifier)!); // get and parse the saved data from localStorage
      for (const element of this._formElements) {
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
      this.dispatch(this.el, `form-save:restore:success`);
    } else {
      this.dispatch(this.el, `form-save:restore:empty`);
    }
  }

}
