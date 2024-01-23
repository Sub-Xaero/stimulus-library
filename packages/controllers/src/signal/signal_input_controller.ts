import { BaseController, EventBus, getAllRadiosInGroup, isHTMLInputElement } from "@stimulus-library/utilities";
import { useEventBus, useEventListeners } from "@stimulus-library/mixins";
import { signalConnectEvent, signalValueEvent } from "./events";

export interface SignalPayload {
  element: HTMLElement;
  value: string;
}

export class SignalInputController extends BaseController {

  static values = {
    name: String,
    debounceInterval: Number,
    triggerChange: {
      type: Boolean,
      default: false,
    },
    triggerInput: {
      type: Boolean,
      default: false,
    },
  };

  declare debounceIntervalValue: number;
  declare readonly hasDebounceIntervalValue: boolean;
  declare nameValue: string;
  declare hasNameValue: boolean;
  declare triggerChangeValue: boolean;
  declare readonly hasTriggerChangeValue: boolean;
  declare triggerInputValue: boolean;
  declare readonly hasTriggerInputValue: boolean;

  get _debounceTimeout(): number | null {
    return this.hasDebounceIntervalValue ? this.debounceIntervalValue : 1;
  }

  get _name(): string {
    return this.hasNameValue ? this.nameValue : (this.element as HTMLInputElement).name;
  }

  connect() {
    useEventBus(this, signalConnectEvent(this._name), () => this.emitValue());
    useEventBus(this, signalValueEvent(this._name), this._onSignal);
    useEventListeners(this, this.el, ["input", "change"], this.emitValue, { debounce: this._debounceTimeout || undefined });
    requestAnimationFrame(() => this.emitValue());
  }

  emitValue() {
    let value = (this.el as HTMLInputElement).value;

    if (isHTMLInputElement(this.el) && this.el.type === "checkbox") {
      value = this.el.checked ? "true" : "false";
    } else if (isHTMLInputElement(this.el) && this.el.type === "radio") {
      const selectedValue = getAllRadiosInGroup(this.el).find(el => el.checked)?.value;
      value = selectedValue ? selectedValue : "";
    }

    this.dispatchEvent(this.el, signalValueEvent(this._name), { detail: { value } });
    EventBus.emit(signalValueEvent(this._name), { element: this.el, value } as SignalPayload);
  }

  _onSignal(payload: SignalPayload) {
    const { element, value } = payload;
    if (element === this.el) {
      return;
    }
    if (isHTMLInputElement(this.el) && this.el.type === "checkbox") {
      this.el.checked = value === "true";
    } else if (isHTMLInputElement(this.el) && this.el.type === "radio") {
      this.el.checked = this.el.value === value;
    } else {
      (this.el as HTMLInputElement).value = value;
    }
    if (this.triggerChangeValue) {
      this.dispatchEvent(this.el, "change");
    }
    if (this.triggerInputValue) {
      this.dispatchEvent(this.el, "input");
    }
  }
}