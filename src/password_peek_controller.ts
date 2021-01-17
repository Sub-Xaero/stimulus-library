import {Controller} from "stimulus";

export class PasswordPeekController extends Controller {

  static targets = ["password"];

  declare readonly passwordTarget: HTMLInputElement;

  connect() {
  }

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
