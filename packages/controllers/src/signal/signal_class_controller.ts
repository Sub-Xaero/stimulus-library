import { SignalPayload } from "./signal_input_controller";
import { signalEventName } from "./events";
import { SignalBaseController } from "./base_controller";

export class SignalClassController extends SignalBaseController {

  static values = {
    name: String,
    when: String,
    class: String,
  };

  declare nameValue: string;
  declare whenValue: string;
  declare classValue: string;

  get predicateString() {
    return this.whenValue;
  }

  _onSignal(payload: SignalPayload) {
    const value = payload.value;

    if (this.whenValue === "default") {
      if (value === "") {
        this.el.classList.remove(this.classValue);
      } else {
        this.el.classList.add(this.classValue);
      }
      return;
    }

    if (this.predicatesMatch(value)) {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, "class-add"), {
        detail: { predicate: this.whenValue, value, class: this.classValue },
      });
      this.el.classList.add(this.classValue);
    } else {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, "class-remove"), {
        detail: { predicate: this.whenValue, value, class: this.classValue },
      });
      this.el.classList.remove(this.classValue);
    }
  }

}
