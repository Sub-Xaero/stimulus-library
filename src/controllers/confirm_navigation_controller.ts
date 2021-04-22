import {BaseController} from "../utilities/base_controller";

export class ConfirmNavigationController extends BaseController {

  static values = {_message: String};

  declare readonly _messageValue: string;
  declare readonly hasMessageValue: boolean;

  get _message(): string {
    return this.hasMessageValue ? this._messageValue : "Do you want to leave this page? Changes you made may not be saved";
  }

  initialize() {
    this.handlePopstate = this.handlePopstate.bind(this);
    this.handleTurboNavigation = this.handleTurboNavigation.bind(this);
  }

  connect() {
    window.onbeforeunload = () => this._message;
    window.addEventListener("popstate", this.handlePopstate);
    window.addEventListener("submit", () => {
      window.removeEventListener("popstate", this.handlePopstate);
      window.onbeforeunload = null;
    });
    window.addEventListener("turbolinks:before-visit", this.handleTurboNavigation);
    window.addEventListener("turbo:before-visit", this.handleTurboNavigation);
  }

  handlePopstate(_event: PopStateEvent) {
    return false;
  }

  handleTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
