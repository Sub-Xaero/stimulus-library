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
    // Trigger synthetic "submit" event on form
    this.dispatch((this.el), "submit");
  }
}
