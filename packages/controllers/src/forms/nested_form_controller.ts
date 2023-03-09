import { BaseController } from "@stimulus-library/utilities";

export class NestedFormController extends BaseController {
  static targets = ['target', 'template'];
  static values = {
    insertMode: String,
    wrapperClass: String,
  };

  declare readonly targetTarget: HTMLElement;
  declare readonly templateTarget: HTMLTemplateElement | HTMLScriptElement;

  declare readonly wrapperClassValue: string;
  declare readonly hasWrapperSelectorValue: boolean;
  declare readonly insertModeValue: InsertPosition;
  declare readonly hasInsertModeValue: boolean;

  get _wrapperClass() {
    return this.hasWrapperSelectorValue ? this.wrapperClassValue : 'nested-fields';
  }

  get _insertMode(): InsertPosition {
    return this.hasInsertModeValue ? this.insertModeValue : 'beforeend';
  }

  connect() {
    this._checkStructure();
  }

  add(event?: Event) {
    event?.preventDefault();

    const content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, this._generateID());
    this.targetTarget.insertAdjacentHTML(this._insertMode, content);
  }

  remove(event: Event) {
    event.preventDefault();
    const wrapper: HTMLElement | null = (event.target as HTMLElement).closest(`.${this._wrapperClass}`);
    if (wrapper == null) {
      throw new Error(`#remove was clicked from outside of a child record. Could not find an ancestor with class .${this._wrapperClass}`);
    }

    if (wrapper.dataset.newRecord === 'true') {
      wrapper.remove();
    } else {
      wrapper.style.display = 'none';
      let destroyInput = wrapper.querySelector("input[name*='_destroy']") as HTMLInputElement | null;
      if (destroyInput == null) {
        throw new Error(`Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.`);
      }

      destroyInput.value = "1";
    }
  }

  private _generateID(): string {
    return new Date().getTime().toString() + Math.random().toString().slice(2);
  }

  private _checkStructure() {
    let template = this.templateTarget.innerHTML;

    if (template.indexOf('NEW_RECORD')) {
      throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`");
    }
  }
}