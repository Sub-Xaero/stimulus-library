import {Controller} from "stimulus";

export class EnableInputsController extends Controller {

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
