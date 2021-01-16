import {Controller} from "stimulus";

export class AutoSubmitFormController extends Controller {

  private boundHandler = this.handler.bind(this);

  connect() {
    (this.element as HTMLElement).querySelectorAll("input, select, textarea").forEach(el => el.addEventListener("change", this.boundHandler));
  }

  disconnect() {
    (this.element as HTMLElement).querySelectorAll("input, select, textarea").forEach(el => el.removeEventListener("change", this.boundHandler));
  }

  private handler(e: Event) {
    // this.element.submit()
    // Moved to this to support remote forms and CSRF properly
    this.element.dispatchEvent(
      new CustomEvent("submit", {
        bubbles: true,
        cancelable: true,
      }),
    );
  }
}
