import {BaseController} from "./base_controller";

export class EnableInputsController extends BaseController {

  static targets = ["enabler", "enable"];

  static values = {
    clear: Boolean,
  };

  declare readonly hasEnablerTarget: boolean;
  declare readonly enablerTarget: HTMLInputElement;
  declare readonly enableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  declare readonly clearValue: boolean;
  declare readonly hasClearValue: boolean;

  connect() {
    this.toggle();
  }

  toggle() {
    if (this.hasEnablerTarget && this.enablerTarget.checked) {
      this.enableInputs();
    } else {
      this.disableInputs();
    }
  }

  disableInputs() {
    let shouldClear = this.hasClearValue && this.clearValue;
    this.enableTargets.forEach((el, _) => {
      if (shouldClear) {
        el.value = "";
      }
      el.disabled = true;
    });
  }

  enableInputs() {
    this.enableTargets.forEach((el, _) => {
      el.disabled = false;
    });
  }
}
