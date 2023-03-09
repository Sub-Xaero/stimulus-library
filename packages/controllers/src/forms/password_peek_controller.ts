import { BaseController } from "@stimulus-library/utilities";

export class PasswordPeekController extends BaseController {

  static targets = ["password"];

  declare readonly passwordTarget: HTMLInputElement;

  peak(event?: Event) {
    event?.preventDefault();
    this.passwordTarget.type = "text";
  }

  hide(event?: Event) {
    event?.preventDefault();
    this.passwordTarget.type = "password";
  }

  toggle(event?: Event) {
    event?.preventDefault();
    if (this.passwordTarget.type === "password") {
      this.peak();
    } else {
      this.hide();
    }
  }
}
