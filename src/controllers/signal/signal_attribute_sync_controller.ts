import {SignalPayload} from "./signal_input_controller";
import {SignalBaseController} from "./base_controller";

export class SignalAttributeSyncController extends SignalBaseController {

  static values = {
    name: String,
    attribute: String,
  };

  declare nameValue: string;
  declare readonly hasNameValueValue: boolean;
  declare attributeValue: string;
  declare readonly hasAttributeValue: boolean;

  _onSignal(payload: SignalPayload) {
    this.el.setAttribute(this.attributeValue, payload.value);
  }

}
