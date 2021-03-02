import {BaseController} from "./base_controller";
import {isElementCheckable, isHTMLSelectElement} from "./utilities/elements";

export class DetectDirtyController extends BaseController {

  initialize() {
    this.checkDirty = this.checkDirty.bind(this);
  }

  connect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.checkDirty();
    element.addEventListener("input", this.checkDirty);
    element.addEventListener("change", this.checkDirty);
  }

  disconnect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    element.removeEventListener("input", this.checkDirty);
    element.removeEventListener("change", this.checkDirty);
  }

  restore() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (isElementCheckable(element)) {
      element.checked = element.defaultChecked;
    } else if (isHTMLSelectElement(element)) {
      Array.from(element.options).forEach(option => option.selected = option.defaultSelected);
    } else {
      element.value = element.defaultValue;
    }
  }

  private checkDirty(_event?: Event) {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    let dirty: boolean;
    if (isElementCheckable(element)) {
      dirty = element.checked != element.defaultChecked;
    } else if (isHTMLSelectElement(element)) {
      dirty = Array.from(element.options).some(option => option.selected != option.defaultSelected);
    } else {
      dirty = element.value != element.defaultValue;
    }

    if (dirty) {
      element.setAttribute("data-dirty", "true");
    } else {
      element.removeAttribute("data-dirty");
    }
  }

}

export function isDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
