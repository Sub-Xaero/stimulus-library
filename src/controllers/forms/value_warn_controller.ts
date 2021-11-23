import {BaseController} from "../../utilities/base_controller";
import {useEventListener} from "../../mixins/use_event_listener";
import {installClassMethods} from "../../mixins/install_class_methods";

export class ValueWarnController extends BaseController {

  static classes = ["inputWarning", "warningHide"];
  static targets = ["input", "warning"];
  static values = {
    max: Number,
    min: Number,
    minMessage: String,
    maxMessage: String,
  };

  declare readonly inputTarget: HTMLInputElement;
  declare readonly warningTarget: HTMLElement;
  declare readonly maxValue: number;
  declare readonly hasMaxValue: boolean;
  declare readonly minValue: number;
  declare readonly hasMinValue: boolean;
  declare readonly minMessageValue: string;
  declare readonly hasMinMessageValue: boolean;
  declare readonly maxMessageValue: string;
  declare readonly hasMaxMessageValue: boolean;
  declare addInputWarningClasses: (el?: HTMLElement) => void;
  declare removeInputWarningClasses: (el?: HTMLElement) => void;
  declare addWarningHideClasses: (el?: HTMLElement) => void;
  declare removeWarningHideClasses: (el?: HTMLElement) => void;

  get _maxMessage(): string {
    return this.hasMaxMessageValue ? this.maxMessageValue : `Value must be less than ${this.maxValue}`;
  }

  get _minMessage(): string {
    return this.hasMinMessageValue ? this.minMessageValue : `Value must be greater than ${this.minValue}`;
  }

  get defaultWarningHideClasses(): string[] {
    return ["hide"];
  }

  connect() {
    installClassMethods(this);
    this.addWarningHideClasses(this.warningTarget);
    useEventListener(this, this.inputTarget, "input", this._check);
    this._check();
  }

  private _check() {
    if (this.hasMinValue && Number.parseFloat(this.inputTarget.value) < this.minValue) {
      this.removeWarningHideClasses(this.warningTarget);
      this.addInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = this._minMessage;
    } else if (this.hasMaxValue && Number.parseFloat(this.inputTarget.value) > this.maxValue) {
      this.removeWarningHideClasses(this.warningTarget);
      this.addInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = this._maxMessage;
    } else {
      this.addWarningHideClasses(this.warningTarget);
      this.removeInputWarningClasses(this.inputTarget);
      this.warningTarget.innerText = "";
    }
  }

}
