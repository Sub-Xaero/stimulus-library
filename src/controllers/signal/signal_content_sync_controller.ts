import {SignalPayload} from "./signal_input_controller";
import {SignalBaseController} from "./base_controller";

export class SignalContentSyncController extends SignalBaseController {

  static values = {
    name: String,
  };

  declare nameValue: string;
  declare readonly hasNameValueValue: boolean;

  _onSignal(payload: SignalPayload) {
    this.el.innerText = payload.value;
  }

}
