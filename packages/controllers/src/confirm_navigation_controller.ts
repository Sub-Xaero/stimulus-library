import { BaseController } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

export class ConfirmNavigationController extends BaseController {

  static values = { message: String };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : "Do you want to leave this page? Changes you made may not be saved";
  }

  connect() {
    window.onbeforeunload = () => this._message;
    useEventListener(this, window, "popstate", this.confirmNavigation);
    useEventListener(this, window, "submit", this.allowSubmit);
    useEventListener(this, window, ["turbolinks:before-visit", "turbo:before-visit"], this.confirmTurboNavigation);
  }

  disconnect() {
    window.onbeforeunload = null;
  }

  allowSubmit(_event: Event) {
    window.removeEventListener("popstate", this.confirmNavigation);
    window.onbeforeunload = null;
  }

  confirmNavigation(_event: Event | PopStateEvent) {
    return false;
  }

  confirmTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
