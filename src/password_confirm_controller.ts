import {Controller} from "stimulus";

export class PasswordConfirmController extends Controller {

  static targets = ["password"];
  static classes = ["error"];

  declare readonly passwordTargets: HTMLInputElement[];

  declare readonly errorClass: string;
  declare readonly hasErrorClass: boolean;

  private boundCheckPasswordsMatch = this.checkPasswordsMatch.bind(this);

  connect() {
    this.passwordTargets.forEach((el) => el.addEventListener("change", this.boundCheckPasswordsMatch));
  }

  disconnect() {
    this.passwordTargets.forEach((el) => el.removeEventListener("change", this.boundCheckPasswordsMatch));
  }

  private allPasswordsMatch() {
    let values = new Set(this.passwordTargets.map(el => el.value));  // Create a unique set of the password values
    return values.has("") || values.size == 1; // If any of the passwords are still blank, or there is only one distinct password value (i.e. they all are the same)
  }

  private checkPasswordsMatch() {
    if (this.allPasswordsMatch()) {
      this.element.dispatchEvent(new CustomEvent("password-confirm:match"));
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => el.classList.remove(this.errorClass));
      }
    } else {
      this.element.dispatchEvent(new CustomEvent("password-confirm:no-match"));
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => el.classList.add(this.errorClass));
      }
    }
  }
}
