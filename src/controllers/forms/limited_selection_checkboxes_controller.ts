import {BaseController} from "../../utilities/base_controller";
import {useCollectionEventListener} from "../../mixins/use_event_listener";
import {dispatchEvent} from "../../utilities/events";

export class LimitedSelectionCheckboxesController extends BaseController {

  static targets = ["input", "error"];
  static values = {max: Number, message: String};

  declare readonly hasErrorTarget: boolean;
  declare readonly errorTarget: HTMLElement;
  declare readonly inputTargets: HTMLInputElement[];
  declare readonly maxValue: number;
  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  connect() {
    useCollectionEventListener(this, this.inputTargets, "change", this._handleInputs);
  }

  _handleInputs(event: Event) {
    let tickedInputs = this.inputTargets.reduce((previousValue, el) => el.checked ? previousValue + 1 : previousValue, 0);
    let target = event.target as HTMLInputElement;
    if (tickedInputs > this.maxValue) {
      event.preventDefault();
      target.checked = false;
      this.dispatchEvent(target, "change");
      this.dispatchEvent(target, "limited-selection:too-many");
      if (this.hasErrorTarget && this.hasMessageValue) {
        this.errorTarget.innerHTML = this.messageValue;
      }
    } else {
      this.dispatchEvent(target, "limited-selection:selection");
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = "";
      }
    }
  }
}
