import { BaseController, EventBus } from "@stimulus-library/utilities";
import { SignalPayload } from "./signal_input_controller";
import { signalConnectEvent, signalValueEvent } from "./events";
import { useEventBus, useMutationObserver } from "@stimulus-library/mixins";

export class SignalDomChildrenController extends BaseController {

  static values = {
    name: String,
    scopeSelector: String,
  };
  declare nameValue: string;
  declare hasNameValue: boolean;
  declare hasScopeSelectorValue: boolean;
  declare scopeSelectorValue: string;

  get _children(): Element[] {
    if (this.hasScopeSelectorValue) {
      return Array.from(this.el.querySelectorAll(this.scopeSelectorValue));
    } else {
      return Array.from(this.el.children);
    }
  }

  get _name() {
    if (this.hasNameValue) {
      return this.nameValue;
    } else {
      throw new Error("SignalEmptyDomController requires a nameValue to be provided");
    }
  }

  connect() {
    useEventBus(this, signalConnectEvent(this._name), this.emitChildCount);
    EventBus.emit(signalConnectEvent(this._name));
    useMutationObserver(this, this.el, this.mutate, {childList: true});
    this.emitChildCount();
  }

  mutate(entries: MutationRecord[]) {
    this.emitChildCount();
  }

  emitChildCount() {
    let childCount = this._children.length;
    let value = childCount.toString();
    this.dispatchEvent(this.el, signalValueEvent(this._name), {detail: {value}});
    EventBus.emit(signalValueEvent(this._name), {element: this.el, value} as SignalPayload);
  }

}
