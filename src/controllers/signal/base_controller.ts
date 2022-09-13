import {BaseController} from "../../utilities/base_controller";
import {SignalPayload} from "./signal_input_controller";
import {extractPredicates} from "./expressions";
import {EventBus} from "../../utilities/event_bus";
import {signalConnectEvent, signalValueEvent} from "./events";
import {useEventBus} from "../../mixins/use_event_bus";

export abstract class SignalBaseController extends BaseController {

  static values = {
    name: String,
  };

  declare nameValue: string;

  connect() {
    EventBus.emit(signalConnectEvent(this.nameValue));
    useEventBus(this, signalValueEvent(this.nameValue), this._onSignal);
  }

  get predicateString() {
    return "";
  }

  get _predicates(): Array<(val: string | number) => boolean> {
    return extractPredicates(this.predicateString);
  }

  allPredicatesMatch(value: SignalPayload['value']): boolean {
    return this._predicates.every(predicate => predicate(value));
  }

  abstract _onSignal(payload: SignalPayload): void;
}
