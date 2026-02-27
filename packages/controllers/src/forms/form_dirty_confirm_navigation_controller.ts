import { BaseController } from "@stimulus-library/utilities";
import { useDirtyFormTracking, useEventListener } from "@stimulus-library/mixins";

export class FormDirtyConfirmNavigationController extends BaseController {
  static values = { message: String };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  _enabled = false;
  _historyTrapActive = false;
  _teardowns: (() => void)[] = [];

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : "Do you want to leave this page? Changes you made may not be saved";
  }

  connect() {
    useDirtyFormTracking(this, this.el as HTMLFormElement);

    useEventListener(this, this.el, "form-dirtied", this._enable);
    useEventListener(this, this.el, "form-cleaned", this._disable);
  }

  private _enable() {
    if (this._enabled) {
      return;
    }
    this._enabled = true;
    window.onbeforeunload = () => this._message;
    const { teardown: submitTeardown } = useEventListener(this, window, ["submit", "turbo:submit-start"], this._disable);
    const { teardown: popstateTeardown } = useEventListener(this, window, "popstate", this._confirmNavigation);
    const { teardown: turbolinksTeardown } = useEventListener(this, window, ["turbolinks:before-visit", "turbo:before-visit"], this._confirmTurboNavigation);
    this._teardowns = [submitTeardown, popstateTeardown, turbolinksTeardown];
    history.pushState(null, document.title, window.location.href);
    this._historyTrapActive = true;
  }

  private _disable() {
    this._enabled = false;
    window.onbeforeunload = null;
    const wasTrapped = this._historyTrapActive;
    this._historyTrapActive = false;
    this._teardowns.forEach(teardown => teardown());
    this._teardowns = [];
    if (wasTrapped) {
      // Remove dummy history entry silently — listener is already torn down
      history.back();
    }
  }

  private _confirmNavigation(_event: Event | PopStateEvent) {
    if (confirm(this._message)) {
      // User confirms leaving — disable trap and navigate to the real previous entry
      this._historyTrapActive = false;
      this._disable();
      history.back();
    } else {
      // User wants to stay — re-push dummy entry to re-arm the trap
      history.pushState(null, document.title, window.location.href);
    }
  }

  private _confirmTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
