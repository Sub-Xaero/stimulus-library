import { BaseController } from "@stimulus-library/utilities";
import { useCollectionEventListener, useEventListener } from "@stimulus-library/mixins";

export class CheckboxSelectAllController extends BaseController {
  static targets = ["selectAll", "checkbox"];

  declare readonly hasSelectAllTarget: boolean;
  declare readonly selectAllTarget: HTMLInputElement;
  declare readonly checkboxTargets: HTMLInputElement[];

  private get _checked() {
    return this._enabled.filter(checkbox => checkbox.checked);
  }

  private get _enabled() {
    return this.checkboxTargets.filter(checkbox => !checkbox.disabled && !checkbox.readOnly);
  }

  private get _unchecked() {
    return this._enabled.filter(checkbox => !checkbox.checked);
  }

  connect() {
    requestAnimationFrame(() => {
      if (!this.hasSelectAllTarget) {
        return;
      }

      useEventListener(this, this.selectAllTarget, "change", this._toggle);
      useCollectionEventListener(this, this.checkboxTargets, "change", this._refresh);
      this._refresh();
    });
  }

  private _toggle(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    this._enabled.forEach((checkbox) => checkbox.checked = (checkbox.disabled || checkbox.readOnly) ? checkbox.checked : target.checked);
  }

  private _refresh() {
    const checkboxesCount = this._enabled.length;
    const checkboxesCheckedCount = this._checked.length;

    this.selectAllTarget.checked = checkboxesCheckedCount > 0;
    this.selectAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount;
  }
}