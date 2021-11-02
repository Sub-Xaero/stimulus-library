import {BaseController} from "../../utilities/base_controller";

export class EnableInputsController extends BaseController {

  static targets = ["enable"];

  static values = {
    clear: Boolean,
  };

  declare readonly enableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  declare readonly clearValue: boolean;
  declare readonly hasClearValue: boolean;

  connect() {
  }

  disable() {
    let shouldClear = this.hasClearValue && this.clearValue;
    this.enableTargets.forEach((el, _) => {
      if (shouldClear) {
        el.value = "";
      }
      el.disabled = true;
    });
  }

  enable() {
    this.enableTargets.forEach((el, _) => el.disabled = false);
  }
}
