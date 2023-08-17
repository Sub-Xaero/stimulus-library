import { BaseController } from "@stimulus-library/utilities";

export class CheckboxEnableInputsController extends BaseController {

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
      this.enable();
    } else {
      this.disable();
    }
  }

  disable() {
    const shouldClear = this.hasClearValue && this.clearValue;
    this.enableTargets.forEach((el, _) => {
      if (shouldClear) {
        el.value = "";
      }
      el.disabled = true;
    });
  }

  enable() {
    this.enableTargets.forEach((el, _) => {
      el.disabled = false;
    });
  }
}
