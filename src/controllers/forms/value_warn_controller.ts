import {BaseController} from "../../utilities/base_controller";
import {useEventListener} from "../../mixins/use_event_listener";

export class ValueWarnController extends BaseController {
  static classes = ["inputWarning", "warningHide"];
  static targets = ["input", "warning"];
  static values = {max: Number, min: Number, minMessage: String, maxMessage: String};/* Classes*/
  declare readonly inputWarningClass: string;
  declare readonly hasInputWarningClass: boolean;
  declare readonly warningHideClass: string;
  declare readonly hasWarningHideClass: boolean;/* Targets*/
  declare readonly inputTarget: HTMLInputElement;
  declare readonly warningTarget: HTMLElement;/* Values*/
  declare readonly maxValue: number;
  declare readonly hasMaxValue: boolean;
  declare readonly minValue: number;
  declare readonly hasMinValue: boolean;
  declare readonly minMessageValue: string;
  declare readonly hasMinMessageValue: boolean;
  declare readonly maxMessageValue: string;
  declare readonly hasMaxMessageValue: boolean;

  get _maxMessage(): string {
    return this.hasMaxMessageValue ? this.maxMessageValue : `Value must be less than ${this.maxValue}`;
  }

  get _minMessage(): string {
    return this.hasMinMessageValue ? this.minMessageValue : `Value must be greater than ${this.minValue}`;
  }

  get _warningHideClasses(): string[] {
    return this.warningHideClass.split(" ");
  }

  get _defaultWarningHideClasses(): string[] {
    return ["hide"];
  }

  get _inputWarningClasses(): string[] {
    return this.inputWarningClass.split(" ");
  }

  get _defaultInputWarningClasses(): string[] {
    return [""];
  }

  connect() {
    this._addWarningHideClasses(this.warningTarget);
    useEventListener(this, this.inputTarget,"input", this._check);
    this._check();
  }

  private _check() {
    if (this.hasMinValue && Number.parseFloat(this.inputTarget.value) < this.minValue) {
      this._removeWarningHideClasses(this.warningTarget);
      this._addInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = this._minMessage;
    } else if (this.hasMaxValue && Number.parseFloat(this.inputTarget.value) > this.maxValue) {
      this._removeWarningHideClasses(this.warningTarget);
      this._addInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = this._maxMessage;
    } else {
      this._addWarningHideClasses(this.warningTarget);
      this._removeInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = "";
    }
  }

  private _addWarningHideClasses(el: HTMLElement = this.el) {
    if (this.hasWarningHideClass) {
      el.classList.add(...this._warningHideClasses);
    } else {
      el.classList.add(...this._defaultWarningHideClasses);
    }
  }

  private _removeWarningHideClasses(el: HTMLElement = this.el) {
    if (this.hasWarningHideClass) {
      el.classList.remove(...this._warningHideClasses);
    } else {
      el.classList.remove(...this._defaultWarningHideClasses);
    }
  }

  private _addInputWarningClasses(el: HTMLElement = this.el) {
    if (this.hasInputWarningClass) {
      el.classList.add(...this._inputWarningClasses);
    } else {
      el.classList.add(...this._defaultInputWarningClasses);
    }
  }

  private _removeInputWarningClasses(el: HTMLElement = this.el) {
    if (this.hasInputWarningClass) {
      el.classList.remove(...this._inputWarningClasses);
    } else {
      el.classList.remove(...this._defaultInputWarningClasses);
    }
  }
}
