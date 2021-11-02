import {BaseController} from "../../utilities/base_controller";
import {useEventListener} from "../../mixins/use_event_listener";

export class CharCountController extends BaseController {

  // Config
  static targets = ["input", "output"];
  static values = {min: Number, max: Number};
  static classes = ["error"];

  // Targets
  declare readonly inputTarget: HTMLInputElement | HTMLTextAreaElement;
  declare readonly outputTarget: HTMLElement;
  // Values
  declare minValue: number;
  declare hasMinValue: boolean;
  declare maxValue: number;
  declare hasMaxValue: boolean;
  // Classes
  declare readonly errorClass: string;
  declare readonly hasErrorClass: boolean;

  // Getters
  get _errorClasses(): string[] {
    return this.errorClass.split(' ');
  }

  get _defaultErrorClasses(): string[] {
    return [];
  }

  connect() {
    requestAnimationFrame(() => {
      useEventListener(this, this.inputTarget, "input", this._updateCharCount);
      this._updateCharCount();
    });
  }

  private _addErrorClasses(el: HTMLElement = this.el) {
    if (this.hasErrorClass) {
      el.classList.add(...this._errorClasses);
    } else {
      el.classList.add(...this._defaultErrorClasses);
    }
  }

  private _removeErrorClasses(el: HTMLElement = this.el) {
    if (this.hasErrorClass) {
      el.classList.remove(...this._errorClasses);
    } else {
      el.classList.remove(...this._defaultErrorClasses);
    }
  }

  private _updateCharCount() {
    let charCount = this.inputTarget.value.length;
    this.outputTarget.innerText = charCount.toString();
    if (this.hasErrorClass) {
      if (this._isValidCount(charCount)) {
        this._removeErrorClasses(this.outputTarget);
      } else {
        this._addErrorClasses(this.outputTarget);
      }
    }
  }

  private _isValidCount(count: number) {
    let min = 0;
    let max = 99999;

    if (this.hasMinValue) {
      min = this.minValue;
    }

    if (this.hasMaxValue) {
      max = this.maxValue;
    }

    return count >= min && count <= max;
  }

}
