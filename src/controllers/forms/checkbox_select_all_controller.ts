import {BaseController} from '../../utilities/base_controller';
import {useCollectionEventListener, useEventListener} from "../../mixins/use_event_listener";

export class CheckboxSelectAllController extends BaseController {
  static targets = ['selectAll', 'checkbox'];

  declare readonly hasSelectAllTarget: boolean;
  declare readonly selectAllTarget: HTMLInputElement;
  declare readonly checkboxTargets: HTMLInputElement[];

  private get _checked() {
    return this.checkboxTargets.filter(checkbox => checkbox.checked);
  }

  private get _unchecked() {
    return this.checkboxTargets.filter(checkbox => !checkbox.checked);
  }

  connect() {
    requestAnimationFrame(() => {
      if (!this.hasSelectAllTarget) {
        return;
      }

      useEventListener(this, this.selectAllTarget, 'change', this._toggle);
      useCollectionEventListener(this, this.checkboxTargets, 'change', this._refresh);
      this._refresh();
    });
  }

  private _toggle(event: Event) {
    event.preventDefault();
    let target = event.target as HTMLInputElement;
    this.checkboxTargets.forEach((checkbox) => checkbox.checked = target.checked);
  }

  private _refresh() {
    const checkboxesCount = this.checkboxTargets.length;
    const checkboxesCheckedCount = this._checked.length;

    this.selectAllTarget.checked = checkboxesCheckedCount > 0;
    this.selectAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount;
  }
}