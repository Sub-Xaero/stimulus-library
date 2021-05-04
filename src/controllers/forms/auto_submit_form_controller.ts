import {BaseController} from "../../utilities/base_controller";

export class AutoSubmitFormController extends BaseController {

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
    // Trigger synthetic "submit" event on form to trigger the UJS submission handler
    this.dispatch(this.el, "submit");

    // If element is not handled by UJS, just submit
    if (!this.el.dataset.remote) {
      (this.el as HTMLFormElement).submit();
    }
  }
}
