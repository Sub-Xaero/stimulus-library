import {BaseController} from "../../utilities/base_controller";

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

  initialize() {
    this.submit = this.submit.bind(this);
  }

  connect() {
    this.el.querySelectorAll("input, select, textarea").forEach(el => el.addEventListener("change", this.submit));
  }

  disconnect() {
    this.el.querySelectorAll("input, select, textarea").forEach(el => el.removeEventListener("change", this.submit));
  }

  private submit() {
    let el = this.el as HTMLFormElement;
    if (el.requestSubmit && this._mode == 'request') {
      // .requestSubmit() fires a normal form submission. Including event, and all validations
      el.requestSubmit();
    } else {
      // If element is not handled by UJS, just submit
      if (!this.el.dataset.remote) {
        // .submit() does not fire an event, make sure all event handlers still run
        this.dispatch(this.el, "submit");
        el.submit();
      } else {
        // Trigger synthetic "submit" event on form to trigger the UJS submission handler
        this.dispatch(this.el, "submit");
      }
    }
  }
}
