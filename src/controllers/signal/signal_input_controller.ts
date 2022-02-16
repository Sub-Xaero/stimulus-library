import {BaseController} from "../../utilities/base_controller";
import {EventBus} from "../../utilities/event_bus";
import {useEventListeners} from "../../mixins/use_event_listener";
import {getAllRadiosInGroup, isHTMLInputElement} from "../../utilities";
import {signalConnectEvent, signalValueEvent} from "./events";
import {useEventBus} from "../../mixins/use_event_bus";

export interface SignalPayload {
  element: HTMLElement;
  value: string;
}

export class SignalInputController extends BaseController {

  static values = {
    name: String,
    debounceInterval: Number,
  };

  declare debounceIntervalValue: number;
  declare readonly hasDebounceIntervalValue: boolean;
  declare nameValue: string;
  declare hasNameValue: boolean;

  get _debounceTimeout(): number | null {
    return this.hasDebounceIntervalValue ? this.debounceIntervalValue : 1;
  }

  get _name(): string {
    return this.hasNameValue ? this.nameValue : (this.element as HTMLInputElement).name;
  }

  connect() {
    useEventBus(this, signalConnectEvent(this._name), () => this.emitValue());
    useEventListeners(this, this.el, ["input", "change"], this.emitValue, {debounce: this._debounceTimeout || undefined});
    requestAnimationFrame(() => this.emitValue());
  }

  emitValue() {
    let value = (this.el as HTMLInputElement).value;

    if (isHTMLInputElement(this.el) && this.el.type === "checkbox") {
      value = this.el.checked ? "true" : "false";
    } else if (isHTMLInputElement(this.el) && this.el.type === "radio") {
      let selectedValue = getAllRadiosInGroup(this.el).find(el => el.checked)?.value;
      value = selectedValue ? selectedValue : "";
    }

    this.dispatchEvent(this.el, signalValueEvent(this._name), {detail: {value}});
    EventBus.emit(signalValueEvent(this._name), {element: this.el, value} as SignalPayload);
  }

}