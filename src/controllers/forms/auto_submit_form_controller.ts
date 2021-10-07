import {BaseController} from "../../utilities/base_controller";
import {requestSubmit} from "../../utilities/requestSubmit";

export class AutoSubmitFormController extends BaseController {

  static values = {mode: String};
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

  get _cssSelector() {
    let inputTypes = ['input', 'textarea', 'select'];
    let ignore = ':not([data-no-autosubmit])';
    return inputTypes.map(type => type.concat(ignore)).join(',');
  }

  get inputElements() {
    return this.element.querySelectorAll(this._cssSelector);
  }

  initialize() {
    this.submit = this.submit.bind(this);
  }

  connect() {
    this.inputElements.forEach(el => el.addEventListener('change', this.submit));
  }

  disconnect() {
    this.inputElements.forEach(el => el.removeEventListener('change', this.submit));
  }

  private submit() {
    let el = this.el as HTMLFormElement;
    if (this._mode == 'request') {
      requestSubmit(el);
    } else {
      el.submit(); // Call submit directly, do not dispatch events, do not pass go, do not collect $200.
    }
  }
}
