import { BaseController } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

export class ConfirmNavigationController extends BaseController {

  static values = { message: String };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  _historyTrapActive = false;

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : "Do you want to leave this page? Changes you made may not be saved";
  }

  connect() {
    window.onbeforeunload = () => this._message;
    useEventListener(this, window, "popstate", this.confirmNavigation);
    useEventListener(this, window, "submit", this.allowSubmit);
    useEventListener(this, window, ["turbolinks:before-visit", "turbo:before-visit"], this.confirmTurboNavigation);
    history.pushState(null, document.title, window.location.href);
    this._historyTrapActive = true;
  }

  disconnect() {
    window.onbeforeunload = null;
    if (this._historyTrapActive) {
      this._historyTrapActive = false;
      history.back();
    }
  }

  allowSubmit(_event: Event) {
    window.removeEventListener("popstate", this.confirmNavigation);
    window.onbeforeunload = null;
    if (this._historyTrapActive) {
      this._historyTrapActive = false;
      history.back();
    }
  }

  confirmNavigation(_event: Event | PopStateEvent) {
    if (confirm(this._message)) {
      // User confirms leaving — disable trap and navigate to the real previous entry
      this._historyTrapActive = false;
      window.removeEventListener("popstate", this.confirmNavigation);
      window.onbeforeunload = null;
      history.back();
    } else {
      // User wants to stay — re-push dummy entry to re-arm the trap
      history.pushState(null, document.title, window.location.href);
    }
  }

  confirmTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
