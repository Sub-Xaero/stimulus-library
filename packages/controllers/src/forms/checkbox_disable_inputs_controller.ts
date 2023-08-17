import { BaseController } from "@stimulus-library/utilities";

export class CheckboxDisableInputsController extends BaseController {

  static targets = ["disabler", "disable"];

  static values = {
    clear: Boolean,
  };

  declare readonly hasDisablerTarget: boolean;
  declare readonly disablerTarget: HTMLInputElement;
  declare readonly disableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  declare readonly clearValue: boolean;
  declare readonly hasClearValue: boolean;

  connect() {
    this.toggle();
  }

  toggle() {
    if (this.hasDisablerTarget && this.disablerTarget.checked) {
      this.disable();
    } else {
      this.enable();
    }
  }

  disable() {
    const shouldClear = this.hasClearValue && this.clearValue;
    this.disableTargets.forEach((el, _) => {
      if (shouldClear) {
        el.value = "";
      }
      el.disabled = true;
    });
  }

  enable() {
    this.disableTargets.forEach((el, _) => {
      el.disabled = false;
    });
  }
}
