import { BaseController, EventBus } from "@stimulus-library/utilities";
import { SignalPayload } from "./signal_input_controller";
import { extractExpressions, extractPredicates } from "./expressions";
import { signalConnectEvent, signalValueEvent } from "./events";
import { useEventBus } from "@stimulus-library/mixins";

export abstract class SignalBaseController extends BaseController {

  static values = {
    name: String,
  };

  declare nameValue: string;

  get predicateString() {
    return "";
  }

  get _predicates(): Array<(val: string | number) => boolean> {
    return extractPredicates(this.predicateString);
  }

  get _expressions(): Array<string> {
    return extractExpressions(this.predicateString);
  }

  connect() {
    EventBus.emit(signalConnectEvent(this.nameValue));
    useEventBus(this, signalValueEvent(this.nameValue), this._onSignal);
  }

  predicatesMatch(value: SignalPayload["value"]): boolean {
    if (this.predicateString.includes("||")) {
      return this._predicates.some(predicate => predicate(value));
    } else {
      return this._predicates.every(predicate => predicate(value));
    }
  }

  abstract _onSignal(payload: SignalPayload): void;
}
