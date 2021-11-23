import {BaseController} from "../../utilities/base_controller";
import {useEventListener} from "../../mixins/use_event_listener";
import {installClassMethods} from "../../mixins/install_class_methods";

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
  declare removeErrorClasses: (el?: HTMLElement) => void;
  declare addErrorClasses: (el?: HTMLElement) => void;

  connect() {
    installClassMethods(this);
    requestAnimationFrame(() => {
      useEventListener(this, this.inputTarget, "input", this._updateCharCount);
      this._updateCharCount();
    });
  }


  private _updateCharCount() {
    let charCount = this.inputTarget.value.length;
    this.outputTarget.innerText = charCount.toString();
    if (this._isValidCount(charCount)) {
      this.removeErrorClasses(this.outputTarget);
    } else {
      this.addErrorClasses(this.outputTarget);
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
