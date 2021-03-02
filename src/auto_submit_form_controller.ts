import {BaseController} from "./base_controller";

export class AutoSubmitFormController extends BaseController {

  initialize() {
    this.handler = this.handler.bind(this);
  }

  connect() {
    (this.element as HTMLElement).querySelectorAll("input, select, textarea").forEach(el => el.addEventListener("change", this.handler));
  }

  disconnect() {
    (this.element as HTMLElement).querySelectorAll("input, select, textarea").forEach(el => el.removeEventListener("change", this.handler));
  }

  private handler(e: Event) {
    // Trigger synthetic "submit" event on form
    this.dispatch((this.element as HTMLElement), "submit");
  }
}
