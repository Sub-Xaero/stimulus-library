import {BaseController} from "../../utilities/base_controller";
import {EventBus} from "../../utilities/event_bus";
import {SignalPayload} from "./signal_input_controller";
import {extractPredicates} from "./expressions";

export class SignalVisibilityController extends BaseController {

  static values = {
    name: String,
    show: String,
  };

  static classes = ['hide'];

  declare nameValue: string;
  declare showValue: string;
  declare readonly hideClass: string;
  declare readonly hasHideClass: boolean;

  get _predicates(): Array<(val: string | number) => boolean> {
    return extractPredicates(this.showValue);
  }

  get _hideClasses(): string[] {
    return this.hideClass.split(' ');
  }

  get _defaultHideClasses(): string[] {
    return ["hide"];
  }

  get _eventName(): string {
    return `signal:value:${this.nameValue}`;
  }

  initialize() {
    this._onSignal = this._onSignal.bind(this);
  }

  connect() {
    EventBus.on(this._eventName, this._onSignal);
  }

  _onSignal(payload: SignalPayload) {
    let value = payload.value;
    if (this.showValue == "default") {
      if (value == "") {
        this._removeHideClasses(this.el);
      } else {
        this._addHideClasses(this.el);
      }
      return;
    }
    if (this._predicates.every(predicate => predicate(value))) {
      this._removeHideClasses(this.el);
    } else {
      this._addHideClasses(this.el);
    }
  }

  private _addHideClasses(el: HTMLElement = this.el) {
    if (this.hasHideClass) {
      el.classList.add(...this._hideClasses);
    } else {
      el.classList.add(...this._defaultHideClasses);
    }
  }

  private _removeHideClasses(el: HTMLElement = this.el) {
    if (this.hasHideClass) {
      el.classList.remove(...this._hideClasses);
    } else {
      el.classList.remove(...this._defaultHideClasses);
    }
  }

}