import { camelCase, EphemeralController, get as _get, set as _set } from "@stimulus-library/utilities";
import { useTimeout } from "@stimulus-library/mixins";

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

  connect() {
    this.setState();
    useTimeout(this, this.removeState, this._seconds);
  }

  disconnect() {
    this.removeState();
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
    let controllerName = (element.dataset.controller || "" + ` ${controllerIdentifier} `).trim();
    // @ts-ignore
    controllerName = controllerName.replaceAll("  ", " ");
    element.dataset.controller = controllerName;
  }
  // @ts-ignore
  element[camelCase(`${controllerIdentifier}-attribute-value`)] = propertyString;
  // @ts-ignore
  element[camelCase(`${controllerIdentifier}-seconds-value`)] = seconds.toString();
}

export function applyTemporaryClass(element: HTMLElement, value: any, seconds: number) {
  applyTemporaryState(element, "className", value, seconds);
}
