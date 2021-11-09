import {BaseController} from "../../utilities/base_controller";
import {SignalPayload} from "./signal_input_controller";
import {extractPredicates} from "./expressions";
import {useEventBus} from "../../mixins/use_event_bus";
import {EventBus} from "../../utilities";
import {signalConnectEvent, signalEventName, signalValueEvent} from "./events";

export class SignalActionController extends BaseController {

  static values = {
    name: String,
    when: String,
  };

  declare whenValue: string;
  declare readonly hasWhenValue: boolean;

  declare nameValue: string;

  get _predicates(): Array<(val: string | number) => boolean> {
    return extractPredicates(this.whenValue);
  }

  connect() {
    EventBus.emit(signalConnectEvent(this.nameValue));
    useEventBus(this, signalValueEvent(this.nameValue), this._onSignal);
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (!this.hasWhenValue) {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, 'match'));
      return;
    }
    if (this._predicates.every(predicate => predicate(value))) {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, 'match'), {detail: {element: this.el, value}});
    } else {
      this.dispatchEvent(this.el, signalEventName(this.nameValue, 'no-match'), {detail: {element: this.el, value}});
    }
  }


}