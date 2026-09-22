import { SignalPayload } from "./signal_input_controller.js";
import { SignalBaseController } from "./base_controller.js";

export class SignalAttributeSyncController extends SignalBaseController {

  static values = {
    name: String,
    attribute: String,
  };

  declare nameValue: string;
  declare attributeValue: string;

  _onSignal(payload: SignalPayload) {
    this.el.setAttribute(this.attributeValue, payload.value);
  }

}
