import {SignalPayload} from "./signal_input_controller";
import {signalVisibilityEvent} from "./events";
import {SignalBaseController} from "./base_controller";

export class SignalVisibilityController extends SignalBaseController {

  static values = {
    name: String,
    show: String,
  };

  static classes = ['hide'];

  declare nameValue: string;
  declare showValue: string;
  declare addHideClasses: (el?: HTMLElement) => void;
  declare removeHideClasses: (el?: HTMLElement) => void;

  get defaultHideClasses(): string[] {
    return ["hide"];
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (this.showValue == "default") {
      if (value == "") {
        this.removeHideClasses(this.el);
      } else {
        this.addHideClasses(this.el);
      }
      return;
    }
    if (this.allPredicatesMatch(value)) {
      this.dispatchEvent(this.el, signalVisibilityEvent(this.nameValue, "show"), {detail: {predicate: this.showValue, value}});
      this.removeHideClasses(this.el);
    } else {
      this.dispatchEvent(this.el, signalVisibilityEvent(this.nameValue, "hide"), {detail: {predicate: this.showValue, value}});
      this.addHideClasses(this.el);
    }
  }

}
