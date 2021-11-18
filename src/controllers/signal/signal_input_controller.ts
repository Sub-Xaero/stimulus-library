import {BaseController} from "../../utilities/base_controller";
import {EventBus} from "../../utilities/event_bus";
import {useEventListeners} from "../../mixins/use_event_listener";
import {isHTMLInputElement} from "../../utilities";

export interface SignalPayload {
  element: HTMLElement;
  value: string;
}

export class SignalInputController extends BaseController {

  static values = {
    name: String,
  };
  declare nameValue: string;
  declare hasNameValue: boolean;

  get _name(): string {
    return this.hasNameValue ? this.nameValue : (this.element as HTMLInputElement).name;
  }

  get _eventName(): string {
    return `signal:value:${this._name}`;
  }

  connect() {
    useEventListeners(this, this.el, ["input"], this.emitValue, {debounce: 1000});
    useEventListeners(this, this.el, ["change"], this.emitValue);
    requestAnimationFrame(() => this.emitValue());
  }

  emitValue() {
    let value = (this.el as HTMLInputElement).value;

    if (isHTMLInputElement(this.el) && this.el.type === "checkbox") {
      value = this.el.checked ? "true" : "false";
    }

    EventBus.emit(this._eventName, {
      element: this.el,
      value,
    } as SignalPayload);
  }

}