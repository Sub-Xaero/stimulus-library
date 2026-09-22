import { SignalPayload } from "./signal_input_controller.js";
import { SignalBaseController } from "./base_controller.js";

export class SignalContentSyncController extends SignalBaseController {

  static values = {
    name: String,
  };

  declare nameValue: string;

  _onSignal(payload: SignalPayload) {
    this.el.innerText = payload.value;
  }

}
