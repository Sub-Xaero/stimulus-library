import {BaseController} from "./base_controller";

export class EnableInputsController extends BaseController {

  static targets = ["enabler", "enable"];

  declare readonly hasEnablerTarget: boolean;
  declare readonly enablerTarget: HTMLInputElement;
  declare readonly enableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

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
    this.enableTargets.forEach((el, _) => {
      el.disabled = true;
    });
  }

  enableInputs() {
    this.enableTargets.forEach((el, _) => {
      el.disabled = false;
    });
  }
}
