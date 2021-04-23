import {BaseController} from "../utilities/base_controller";

export class ConfirmNavigationController extends BaseController {

  static values = {_message: String};

  declare readonly _messageValue: string;
  declare readonly hasMessageValue: boolean;

  get _message(): string {
    return this.hasMessageValue ? this._messageValue : "Do you want to leave this page? Changes you made may not be saved";
  }

  initialize() {
    this.allowSubmit = this.allowSubmit.bind(this);
    this.confirmNavigation = this.confirmNavigation.bind(this);
    this.confirmTurboNavigation = this.confirmTurboNavigation.bind(this);
  }

  connect() {
    window.onbeforeunload = () => this._message;
    window.addEventListener("popstate", this.confirmNavigation);
    window.addEventListener("submit", this.allowSubmit);
    window.addEventListener("turbolinks:before-visit", this.confirmTurboNavigation);
    window.addEventListener("turbo:before-visit", this.confirmTurboNavigation);
  }

  disconnect() {
    window.removeEventListener("popstate", this.confirmNavigation);
    window.onbeforeunload = null;
    window.removeEventListener("submit", this.allowSubmit);
    window.removeEventListener("turbolinks:before-visit", this.confirmTurboNavigation);
    window.removeEventListener("turbo:before-visit", this.confirmTurboNavigation);
  }

  allowSubmit(_event: Event) {
    window.removeEventListener("popstate", this.confirmNavigation);
    window.onbeforeunload = null;
  }

  confirmNavigation(_event: PopStateEvent) {
    return false;
  }

  confirmTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
