import {BaseController} from '../utilities/base_controller';

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

  initialize() {
    this._toggle = this._toggle.bind(this);
    this._refresh = this._refresh.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      if (!this.hasSelectAllTarget) {
        return;
      }

      this.selectAllTarget.addEventListener('change', this._toggle);
      this.checkboxTargets.forEach(checkbox => checkbox.addEventListener('change', this._refresh));
      this._refresh();
    });
  }

  disconnect() {
    if (!this.hasSelectAllTarget) {
      return;
    }

    this.selectAllTarget.removeEventListener('change', this._toggle);
    this.checkboxTargets.forEach((checkbox) => checkbox.removeEventListener('change', this._refresh));
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