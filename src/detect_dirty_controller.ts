import {BaseController} from "./base_controller";
import {isElementCheckable} from "./utilities/elements";

export class DetectDirtyController extends BaseController {

  initialValue: string | boolean | null = null;

  initialize() {
    this.checkDirty = this.checkDirty.bind(this);
  }

  connect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (isElementCheckable(element)) {
      this.initialValue = element.checked;
    } else {
      this.initialValue = element.value;
    }
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
      element.checked = this.initialValue as boolean;
    } else {
      element.value = this.initialValue as string;
    }
  }

  private checkDirty(event?: Event) {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    if (this.initialValue !== element.value) {
      element.setAttribute("data-dirty", "true");
    } else {
      element.removeAttribute("data-dirty");
    }
  }

}

export function isDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
