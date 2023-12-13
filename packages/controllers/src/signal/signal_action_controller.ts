import { SignalPayload } from "./signal_input_controller";
import { signalEventName } from "./events";
import { SignalBaseController } from "./base_controller";

export class SignalActionController extends SignalBaseController {

  static values = {
    name: String,
    when: String,
  };

  declare whenValue: string;
  declare readonly hasWhenValue: boolean;

  declare nameValue: string;

  get predicateString() {
    return this.whenValue;
  }

  _onSignal(payload: SignalPayload) {
    const value = payload.value;
    if (!this.hasWhenValue) {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, "match"));
      return;
    }
    if (this.predicatesMatch(value)) {
      this.dispatchEvent(
        this.el,
        signalEventName(this.nameValue, "match"),
        {
          detail: {
            element: this.el,
            value,
          },
        },
      );
    } else {
      this.dispatchEvent(
        this.el,
        signalEventName(this.nameValue, "no-match"),
        {
          detail: {
            element: this.el,
            value,
          },
        },
      );
    }
  }

}
