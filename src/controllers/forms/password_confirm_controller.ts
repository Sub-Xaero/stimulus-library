import {BaseController} from "../../utilities/base_controller";
import {useCollectionEventListener} from "../../mixins/use_event_listener";
import {installClassMethods} from "../../mixins/install_class_methods";

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
    let values = new Set(this.passwordTargets.map(el => el.value));  // Create a unique set of the password values
    return values.has("") || values.size == 1; // If any of the passwords are still blank, or there is only one distinct password value (i.e. they all are the same)
  }

  private _checkPasswordsMatch() {
    let element = this.el;
    if (this._allPasswordsMatch()) {
      this.dispatchEvent(element, "password-confirm:match");
      this.passwordTargets.forEach(el => this.removeErrorClasses(el));
    } else {
      this.dispatchEvent(element, "password-confirm:no-match");
      this.passwordTargets.forEach(el => this.addErrorClasses(el));
    }
  }
}
