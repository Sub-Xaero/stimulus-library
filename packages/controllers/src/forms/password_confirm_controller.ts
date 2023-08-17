import { BaseController } from "@stimulus-library/utilities";
import { installClassMethods, useCollectionEventListener } from "@stimulus-library/mixins";

export class PasswordConfirmController extends BaseController {

  static targets = ["password"];
  static classes = ["error"];

  declare readonly passwordTargets: HTMLInputElement[];

  declare addErrorClasses: (el?: HTMLElement) => void;
  declare removeErrorClasses: (el?: HTMLElement) => void;

  connect() {
    installClassMethods(this);
    useCollectionEventListener(this, this.passwordTargets, "change", this._checkPasswordsMatch);
  }

  private _allPasswordsMatch(): boolean {
    const values = new Set(this.passwordTargets.map(el => el.value));  // Create a unique set of the password values
    return values.has("") || values.size == 1; // If any of the passwords are still blank, or there is only one distinct password value (i.e. they all are the same)
  }

  private _checkPasswordsMatch() {
    const element = this.el;
    if (this._allPasswordsMatch()) {
      this.dispatchEvent(element, this.eventName("match"));
      this.passwordTargets.forEach(el => this.removeErrorClasses(el));
    } else {
      this.dispatchEvent(element, this.eventName("no-match"));
      this.passwordTargets.forEach(el => this.addErrorClasses(el));
    }
  }
}
