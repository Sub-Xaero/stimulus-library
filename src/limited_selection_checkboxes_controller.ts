import {BaseController} from "./base_controller";

export class LimitedSelectionCheckboxesController extends BaseController {

  static targets = ["input", "error"];
  static values = {max: Number, message: String};

  declare readonly hasErrorTarget: boolean;
  declare readonly errorTarget: HTMLElement;
  declare readonly inputTargets: HTMLInputElement[];
  declare readonly maxValue: number;
  declare readonly messageValue: string;

  maxSelections = 0;

  boundHandleInputs = this.handleInputs.bind(this);

  connect() {
    this.inputTargets.forEach((el) => el.addEventListener("change", this.boundHandleInputs));
  }

  disconnect() {
    this.inputTargets.forEach((el) => el.removeEventListener("change", this.boundHandleInputs));
  }

  handleInputs(event: Event) {
    let tickedInputs = this.inputTargets.reduce((previousValue, el) => el.checked ? previousValue + 1 : previousValue, 0);
    let target = event.target as HTMLInputElement;
    if (tickedInputs > this.maxValue) {
      event.preventDefault();
      target.checked = false;
      target.dispatchEvent(new CustomEvent("change", {bubbles: true, cancelable: true}));
      target.dispatchEvent(new CustomEvent("limited-selection:too-many", {bubbles: true, cancelable: true, detail: {target}}));
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = this.messageValue;
      }
    } else {
      target.dispatchEvent(new CustomEvent("limited-selection:selection", {bubbles: true, cancelable: true, detail: {target}}));
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = "";
      }
    }
  }
}
