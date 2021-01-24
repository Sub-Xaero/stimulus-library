import {BaseController} from './base_controller';

export class CheckboxSelectAllController extends BaseController {
  static targets = ['selectAll', 'checkbox'];

  declare readonly hasCheckboxAllTarget: boolean;
  declare readonly selectAllTarget: HTMLInputElement;
  declare readonly checkboxTargets: HTMLInputElement[];

  private get checked() {
    return this.checkboxTargets.filter(checkbox => checkbox.checked);
  }

  private get unchecked() {
    return this.checkboxTargets.filter(checkbox => !checkbox.checked);
  }

  initialize() {
    this.toggle = this.toggle.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      if (!this.hasCheckboxAllTarget) {
        return;
      }

      this.selectAllTarget.addEventListener('change', this.toggle);
      this.checkboxTargets.forEach(checkbox => checkbox.addEventListener('change', this.refresh));
      this.refresh();
    });
  }

  disconnect() {
    if (!this.hasCheckboxAllTarget) {
      return;
    }

    this.selectAllTarget.removeEventListener('change', this.toggle);
    this.checkboxTargets.forEach((checkbox) => checkbox.removeEventListener('change', this.refresh));
  }

  private toggle(event: Event) {
    event.preventDefault();
    let target = event.target as HTMLInputElement;
    this.checkboxTargets.forEach((checkbox) => checkbox.checked = target.checked);
  }

  private refresh() {
    const checkboxesCount = this.checkboxTargets.length;
    const checkboxesCheckedCount = this.checked.length;

    this.selectAllTarget.checked = checkboxesCheckedCount > 0;
    this.selectAllTarget.indeterminate = checkboxesCheckedCount > 0 && checkboxesCheckedCount < checkboxesCount;
  }
}