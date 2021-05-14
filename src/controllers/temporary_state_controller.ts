import {camelCase, get as _get, set as _set} from "lodash-es";
import {EphemeralController} from "../utilities/ephemeral_controller";

export class TemporaryStateController extends EphemeralController {

  static values = {
    attribute: String,
    seconds: Number,
    value: String,
  };

  declare readonly hasSecondsValue: boolean;
  declare readonly secondsValue: number;
  declare readonly attributeValue: string;
  declare readonly hasAttributeValue: boolean;
  declare readonly valueValue: string;
  declare readonly hasValueValue: boolean;
  _timeout: null | ReturnType<typeof window.setTimeout> = null;
  _previousState: { [index: string]: any } = {};

  get _value(): string {
    if (this.hasValueValue) {
      return this.valueValue;
    }
    throw new Error("Expected `valueValue` to be present");
  }

  get _attribute(): string {
    if (this.hasAttributeValue) {
      return this.attributeValue;
    }
    throw new Error("Expected `attributeValue` to be present");
  }

  get _seconds(): number {
    if (this.hasSecondsValue) {
      return this.secondsValue * 1000;
    }
    throw new Error("Expected `secondsValue` to be present");
  }

  initialize() {
    this.setState = this.setState.bind(this);
    this.removeState = this.removeState.bind(this);
  }

  connect() {
    this.setState();
    this._timeout = setTimeout(this.removeState, this._seconds);
  }

  disconnect() {
    this.removeState();
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
  }

  setState() {
    this._previousState[this._attribute] = _get(this.el, this._attribute);
    _set(this.el, this._attribute, this.valueValue);
  }

  removeState() {
    _set(this.el, this._attribute, this._previousState[this._attribute]);
  }

}

export function applyTemporaryState(element: HTMLElement, propertyString: string, value: any, seconds: number, controllerIdentifier = "temporary-state") {
  if (!element.dataset.controller || !element.dataset.controller?.includes(controllerIdentifier)) {
    element.dataset.controller = (element.dataset.controller || '' + ` ${controllerIdentifier} `).trim().replaceAll('  ', ' ');
  }
  // @ts-ignore
  element[camelCase(`${controllerIdentifier}-attribute-value`)] = propertyString;
  // @ts-ignore
  element[camelCase(`${controllerIdentifier}-seconds-value`)] = seconds.toString();
}

export function applyTemporaryClass(element: HTMLElement, value: any, seconds: number) {
  applyTemporaryState(element, 'className', value, seconds);
}
