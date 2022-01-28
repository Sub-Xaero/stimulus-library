import {BaseController} from "../../utilities/base_controller";
import {useEventBus} from "../../mixins/use_event_bus";
import {SignalPayload} from "./signal_input_controller";
import {extractPredicates} from "./expressions";
import {signalConnectEvent, signalValueEvent} from "./events";
import {EventBus} from "../../utilities";
import {installClassMethods} from "../../mixins/install_class_methods";

export class SignalVisibilityController extends BaseController {

  static values = {
    name: String,
    show: String,
  };

  static classes = ['hide'];

  declare nameValue: string;
  declare showValue: string;
  declare addHideClasses: (el?: HTMLElement) => void;
  declare removeHideClasses: (el?: HTMLElement) => void;

  get _predicates(): Array<(val: string | number) => boolean> {
    return extractPredicates(this.showValue);
  }

  get defaultHideClasses(): string[] {
    return ["hide"];
  }

  connect() {
    installClassMethods(this);
    EventBus.emit(signalConnectEvent(this.nameValue));
    useEventBus(this, signalValueEvent(this.nameValue), this._onSignal);
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (this.showValue == "default") {
      if (value == "") {
        this.removeHideClasses(this.el);
      } else {
        this.addHideClasses(this.el);
      }
      return;
    }
    if (this._predicates.every(predicate => predicate(value))) {
      this.dispatchEvent(this.el, "signal-visibility:show");
      this.removeHideClasses(this.el);
    } else {
      this.dispatchEvent(this.el, "signal-visibility:hide");
      this.addHideClasses(this.el);
    }
  }


}