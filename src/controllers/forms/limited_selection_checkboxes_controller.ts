import {BaseController} from "../../utilities/base_controller";

export class LimitedSelectionCheckboxesController extends BaseController {

  static targets = ["input", "error"];
  static values = {max: Number, message: String};

  declare readonly hasErrorTarget: boolean;
  declare readonly errorTarget: HTMLElement;
  declare readonly inputTargets: HTMLInputElement[];
  declare readonly maxValue: number;
  declare readonly messageValue: string;

  initialize() {
    this.handleInputs = this.handleInputs.bind(this);
  }

  connect() {
    this.inputTargets.forEach((el) => el.addEventListener("change", this.handleInputs));
  }

  disconnect() {
    this.inputTargets.forEach((el) => el.removeEventListener("change", this.handleInputs));
  }

  handleInputs(event: Event) {
    let tickedInputs = this.inputTargets.reduce((previousValue, el) => el.checked ? previousValue + 1 : previousValue, 0);
    let target = event.target as HTMLInputElement;
    if (tickedInputs > this.maxValue) {
      event.preventDefault();
      target.checked = false;
      this.dispatch(target, "change");
      this.dispatch(target, "limited-selection:too-many");
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = this.messageValue;
      }
    } else {
      this.dispatch(target, "limited-selection:selection");
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = "";
      }
    }
  }
}
