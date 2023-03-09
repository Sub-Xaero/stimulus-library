import { BaseController, EventBus } from "@stimulus-library/utilities";
import { SignalPayload } from "./signal_input_controller";
import { extractPredicates } from "./expressions";
import { signalConnectEvent, signalValueEvent } from "./events";
import { useEventBus } from "@stimulus-library/mixins";

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
