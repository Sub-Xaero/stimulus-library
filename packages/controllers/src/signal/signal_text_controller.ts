import { SignalPayload } from "./signal_input_controller";
import { SignalBaseController } from "./base_controller";

export class SignalTextController extends SignalBaseController {

  static values = {
    name: String,
  };

  declare nameValue: string;

  _onSignal(payload: SignalPayload) {
    this.el.innerText = payload.value;
  }

}
