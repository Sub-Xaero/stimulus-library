import {BaseController} from "./base_controller";
import {isElementCheckable} from "./utilities/elements";

export class DetectDirtyController extends BaseController {

  initialValue: string | boolean | null = null;

  boundHandler = this.handler.bind(this);

  connect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (isElementCheckable(element)) {
      this.initialValue = element.checked;
    } else {
      this.initialValue = element.value;
    }
    element.addEventListener("input", this.boundHandler);
    element.addEventListener("change", this.boundHandler);
  }

  disconnect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    element.removeEventListener("input", this.boundHandler);
    element.removeEventListener("change", this.boundHandler);
  }

  restore() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (isElementCheckable(element)) {
      element.checked = this.initialValue as boolean;
    } else {
      element.value = this.initialValue as string;
    }
  }

  private handler(event?: Event) {
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
