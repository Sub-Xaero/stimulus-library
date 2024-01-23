import { BaseController, EventBus, isHTMLInputElement, isHTMLSelectElement, isHTMLTextAreaElement, isTypeOfFormInputElement } from "@stimulus-library/utilities";
import { useEventBus, useEventListener } from "@stimulus-library/mixins";

export interface SyncValuePayload {
  value: string | boolean;
  dispatcher: HTMLElement;
}

export class SyncInputsController extends BaseController {
  static values = {
    key: String,
  };

  declare readonly keyValue: string;
  declare readonly hasKeyValue: boolean;

  get _eventName(): string {
    return `sync:${this._key}`;
  }

  get _key(): string {
    if (this.hasKeyValue) {
      return this.keyValue;
    }
    throw new Error("Expected `keyValue` to be present");
  }

  get _value(): string | boolean {
    const el = this.el as | HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (isHTMLInputElement(el) && el.type === "checkbox") {
      return el.checked;
    } else if (isHTMLInputElement(el) && el.type === "radio") {
      return el.checked ? el.value : "";
    } else {
      return el.value;
    }
  }

  set _value(val: string | boolean) {
    const el = this.el;
    if (isHTMLInputElement(el) && el.type === "checkbox") {
      el.checked = val.toString() === "true";
    } else if (isHTMLInputElement(el) && el.type === "radio") {
      el.checked = el.value === val;
    } else if (isHTMLInputElement(el) || isHTMLTextAreaElement(el) || isHTMLSelectElement(el)) {
      el.value = val.toString();
    } else {
      el.innerHTML = val.toString();
    }
  }

  connect() {
    useEventBus(this, this._eventName, this._read);

    requestAnimationFrame(() => {
      if (isTypeOfFormInputElement(this.el)) {
        this._emit();
        useEventListener(this, this.el, "input", this._emit);
      }
    });
  }

  _emit() {
    EventBus.emit(this._eventName, { value: this._value, dispatcher: this.el } as SyncValuePayload);
  }

  _read(payload?: SyncValuePayload) {
    if (payload === undefined) {
      throw new Error("No payload received");
    }
    const { dispatcher, value } = payload;
    if (dispatcher !== this.el) {
      this._value = value;
    }
  }
}
