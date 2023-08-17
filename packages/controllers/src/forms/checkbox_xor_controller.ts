import { BaseController } from "@stimulus-library/utilities";
import { useCollectionEventListener } from "@stimulus-library/mixins";

export class CheckboxXORController extends BaseController {

  static targets = ["checkbox"];
  declare readonly checkboxTargets: HTMLInputElement[];

  connect() {
    useCollectionEventListener(this, this.checkboxTargets, "change", this._update);
  }

  _otherCheckboxes(el: HTMLInputElement): HTMLInputElement[] {
    return Array.from(this.checkboxTargets).filter(field => field !== el);
  }

  _update(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (!target) {
      throw new Error("No target found on event");
    }

    const others = this._otherCheckboxes(target);
    if (target.checked) {
      others.forEach(checkbox => {
        checkbox.checked = false;
        this.dispatchEvent(this.el, "change");
      });
    }
  }
}
