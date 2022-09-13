import {SignalPayload} from "src/*";
import {signalEventName} from "./events";
import {SignalBaseController} from "./base_controller";

export class SignalEnableController extends SignalBaseController {

  static values = {
    name: String,
    when: String,
  };

  declare nameValue: string;
  declare whenValue: string;

  disable() {
    this.el.setAttribute("disabled", "true");
  }

  enable() {
    this.el.removeAttribute("disabled");
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (this.whenValue == "default") {
      if (value == "") {
        this.enable();
      } else {
        this.disable();
      }
      return;
    }
    if (this.allPredicatesMatch(value)) {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, "enable"), {detail: {predicate: this.whenValue, value}});
      this.enable();
    } else {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, "disable"), {detail: {predicate: this.whenValue, value}});
      this.disable();
    }
  }

}
