import {BaseController} from "../utilities/base_controller";

export class PasswordConfirmController extends BaseController {

  static targets = ["password"];
  static classes = ["error"];

  declare readonly passwordTargets: HTMLInputElement[];

  declare readonly errorClass: string;
  declare readonly hasErrorClass: boolean;

  initialize() {
    this.checkPasswordsMatch = this.checkPasswordsMatch.bind(this);
  }

  connect() {
    this.passwordTargets.forEach((el) => el.addEventListener("change", this.checkPasswordsMatch));
  }

  disconnect() {
    this.passwordTargets.forEach((el) => el.removeEventListener("change", this.checkPasswordsMatch));
  }

  private allPasswordsMatch(): boolean {
    let values = new Set(this.passwordTargets.map(el => el.value));  // Create a unique set of the password values
    return values.has("") || values.size == 1; // If any of the passwords are still blank, or there is only one distinct password value (i.e. they all are the same)
  }

  private checkPasswordsMatch() {
    let element = this.el;
    if (this.allPasswordsMatch()) {
      this.dispatch(element, "password-confirm:match");
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => el.classList.remove(this.errorClass));
      }
    } else {
      this.dispatch(element, "password-confirm:no-match");
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => el.classList.add(this.errorClass));
      }
    }
  }
}
