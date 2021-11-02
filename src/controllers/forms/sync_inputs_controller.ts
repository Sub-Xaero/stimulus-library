import {BaseController} from "../../utilities/base_controller";
import {isHTMLInputElement, isHTMLSelectElement, isHTMLTextAreaElement, isTypeOfFormInputElement} from "../../utilities/elements";
import {EventBus} from "../../utilities/event_bus";
import {useEventListener} from "../../mixins/use_event_listener";

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
    let el = this.el as | HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (isHTMLInputElement(el) && el.type === "checkbox") {
      return el.checked;
    } else if (isHTMLInputElement(el) && el.type === "radio") {
      return el.checked ? el.value : "";
    } else {
      return el.value;
    }
  }

  set _value(val: string | boolean) {
    let el = this.el;
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

  initialize() {
    this._read = this._read.bind(this);
    this._emit = this._emit.bind(this);
  }

  connect() {
    EventBus.on(this._eventName, this._read);

    requestAnimationFrame(() => {
      if (isTypeOfFormInputElement(this.el)) {
        this._emit();
        useEventListener(this, this.el, "input", this._emit);
      }
    });
  }

  disconnect() {
    EventBus.off(this._eventName, this._read);
  }

  _emit() {
    EventBus.emit(this._eventName, {value: this._value, dispatcher: this.el} as SyncValuePayload);
  }

  _read(payload?: SyncValuePayload) {
    if (payload === undefined) {
      throw new Error("No payload received");
    }
    let {dispatcher, value} = payload;
    if (dispatcher !== this.el) {
      this._value = value;
    }
  }
}
