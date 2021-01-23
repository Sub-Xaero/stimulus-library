import {BaseController} from "./base_controller";

export class PasswordPeekController extends BaseController {

  static targets = ["password"];

  declare readonly passwordTarget: HTMLInputElement;


  peak(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.passwordTarget.type = "text";
  }

  hide(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.passwordTarget.type = "password";
  }

  toggle(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    if (this.passwordTarget.type === "password") {
      this.peak();
    } else {
      this.hide();
    }
  }
}
