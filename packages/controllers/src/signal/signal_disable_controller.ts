import { SignalPayload } from "./signal_input_controller";
import { signalEventName } from "./events";
import { SignalBaseController } from "./base_controller";

export class SignalDisableController extends SignalBaseController {

  static values = {
    name: String,
    when: String,
  };

  declare nameValue: string;
  declare whenValue: string;

  get predicateString() {
    return this.whenValue;
  }

  disable() {
    this.el.setAttribute("disabled", "true");
  }

  enable() {
    this.el.removeAttribute("disabled");
  }

  _onSignal(payload: SignalPayload) {
    const value = payload.value;
    if (this.whenValue == "default") {
      if (value == "") {
        this.disable();
      } else {
        this.enable();
      }
      return;
    }
    if (this.predicatesMatch(value)) {
      this.dispatchEvent(
        this.el,
        signalEventName(this.nameValue, "disable"),
        {
          detail: {
            predicate: this.whenValue,
            value,
          },
        },
      );
      this.disable();
    } else {
      this.dispatchEvent(
        this.el,
        signalEventName(this.nameValue, "enable"),
        {
          detail: {
            predicate: this.whenValue,
            value,
          },
        },
      );
      this.enable();
    }
  }

}
