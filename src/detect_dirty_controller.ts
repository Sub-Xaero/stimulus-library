import {Controller} from "stimulus";

export class DetectDirtyController extends Controller {

  initialValue: string | boolean | null = null;

  boundHandler = this.handler.bind(this);

  connect() {
    let element = this.element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (this.isInputElement(element) && this.isCheckable(element)) {
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
    if (this.isInputElement(element) && this.isCheckable(element)) {
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

  private isCheckable(element: HTMLInputElement): boolean {
    return (element.type === "radio" || element.type === "checkbox");
  }

  private isInputElement(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): element is HTMLInputElement {
    return element.tagName === "INPUT";
  }

}

export function isDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
