import {BaseController} from "../../utilities/base_controller";

export class EnableInputsController extends BaseController {

  static targets = ["input"];

  static values = {
    clear: Boolean,
  };

  declare readonly inputTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  declare readonly clearValue: boolean;
  declare readonly hasClearValue: boolean;

  connect() {
  }

  disable() {
    let shouldClear = this.hasClearValue && this.clearValue;
    this.inputTargets.forEach((el, _) => {
      if (shouldClear) {
        el.value = "";
      }
      el.disabled = true;
    });
  }

  enable() {
    this.inputTargets.forEach((el, _) => el.disabled = false);
  }
}
