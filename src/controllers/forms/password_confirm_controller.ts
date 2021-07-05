import {BaseController} from "../../utilities/base_controller";

export class PasswordConfirmController extends BaseController {

  static targets = ["password"];
  static classes = ["error"];

  declare readonly passwordTargets: HTMLInputElement[];

  declare readonly errorClass: string;
  declare readonly hasErrorClass: boolean;

  get _errorClasses(): string[] {
    return this.errorClass.split(' ');
  }

  get _defaultErrorClasses(): string[] {
    return [];
  }

  initialize() {
    this._checkPasswordsMatch = this._checkPasswordsMatch.bind(this);
  }

  connect() {
    this.passwordTargets.forEach((el) => el.addEventListener("change", this._checkPasswordsMatch));
  }

  disconnect() {
    this.passwordTargets.forEach((el) => el.removeEventListener("change", this._checkPasswordsMatch));
  }

  private _addErrorClasses(el: HTMLElement = this.el) {
    if (this.hasErrorClass) {
      el.classList.add(...this._errorClasses);
    } else {
      el.classList.add(...this._defaultErrorClasses);
    }
  }

  private _removeErrorClasses(el: HTMLElement = this.el) {
    if (this.hasErrorClass) {
      el.classList.remove(...this._errorClasses);
    } else {
      el.classList.remove(...this._defaultErrorClasses);
    }
  }

  private _allPasswordsMatch(): boolean {
    let values = new Set(this.passwordTargets.map(el => el.value));  // Create a unique set of the password values
    return values.has("") || values.size == 1; // If any of the passwords are still blank, or there is only one distinct password value (i.e. they all are the same)
  }

  private _checkPasswordsMatch() {
    let element = this.el;
    if (this._allPasswordsMatch()) {
      this.dispatch(element, "password-confirm:match");
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => this._removeErrorClasses(el));
      }
    } else {
      this.dispatch(element, "password-confirm:no-match");
      if (this.hasErrorClass) {
        this.passwordTargets.forEach(el => this._addErrorClasses(el));
      }
    }
  }
}
