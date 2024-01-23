import { BaseController } from "@stimulus-library/utilities";
import { useCollectionEventListener } from "@stimulus-library/mixins";

export class LimitedSelectionCheckboxesController extends BaseController {

  static targets = ["input", "error"];
  static values = { max: Number, message: String };

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
    const tickedInputs = this.inputTargets.reduce((previousValue, el) => el.checked ? previousValue + 1 : previousValue, 0);
    const target = event.target as HTMLInputElement;
    if (tickedInputs > this.maxValue) {
      event.preventDefault();
      target.checked = false;
      this.dispatchEvent(target, "change");
      this.dispatchEvent(target, this.eventName("too-many"));
      if (this.hasErrorTarget && this.hasMessageValue) {
        this.errorTarget.innerHTML = this.messageValue;
      }
    } else {
      this.dispatchEvent(target, this.eventName("selection"));
      if (this.hasErrorTarget) {
        this.errorTarget.innerHTML = "";
      }
    }
  }
}
