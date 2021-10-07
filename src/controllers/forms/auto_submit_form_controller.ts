import {BaseController} from "../../utilities/base_controller";
import {requestSubmit} from "../../utilities/requestSubmit";

export class AutoSubmitFormController extends BaseController {

  static values = {
    mode: String,
  };
  declare readonly modeValue: "direct" | "request";
  declare readonly hasModeValue: boolean;

  get _mode(): "direct" | "request" {
    if (this.hasModeValue) {
      if (!["direct", "request"].includes(this.modeValue)) {
        throw new Error(`The modeValue provided '${this.modeValue}' is not one of the recognised configuration options`);
      }
      return this.modeValue;
    } else {
      return "request";
    }
  }

  get submitButton(): HTMLButtonElement {
    let button: HTMLButtonElement | null = this.element.querySelector('button[type="submit"]');
    if (!button) {
      button = document.createElement('button');
      button.type = 'submit';
      button.style.display = 'none';
      button.dataset.sythentic = 'true';
      this.element.insertAdjacentElement('beforeend', button);
    }
    return button;
  }

  initialize() {
    this.submit = this.submit.bind(this);
  }

  connect() {
    this.el.querySelectorAll("input, select, textarea").forEach(el => el.addEventListener("change", this.submit));
  }

  disconnect() {
    this.el.querySelectorAll("input, select, textarea").forEach(el => el.removeEventListener("change", this.submit));
    if (this.submitButton.dataset.synthetic == 'true') {
      this.submitButton.remove();
    }
  }

  private submit() {
    let el = this.el as HTMLFormElement;
    if (this._mode == 'request') {
      requestSubmit(el);
    } else {
      // Call submit directly, do not dispatch events, do not pass go, do not collect $200.
      el.submit();
    }
  }
}
