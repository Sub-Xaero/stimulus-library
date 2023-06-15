import { BaseController } from "@stimulus-library/utilities";
import { useDirtyFormTracking, useEventListener } from "@stimulus-library/mixins";

export class FormDirtyConfirmNavigationController extends BaseController {
  static values = {message: String};

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  _enabled = false;
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
    window.onbeforeunload = () => this._message;
    let {teardown: submitTeardown} = useEventListener(this, window, "submit", this._disable);
    let {teardown: popstateTeardown} = useEventListener(this, window, "popstate", this._confirmNavigation);
    let {teardown: turbolinksTeardown} = useEventListener(this, window, ["turbolinks:before-visit", "turbo:before-visit"], this._confirmTurboNavigation);
    this._teardowns = [submitTeardown, popstateTeardown, turbolinksTeardown];
    this._enabled = true;
  }

  private _disable() {
    window.onbeforeunload = null;
    this._teardowns.forEach(teardown => teardown());
    this._teardowns = [];
  }

  private _confirmNavigation(_event: Event | PopStateEvent) {
    return false;
  }

  private _confirmTurboNavigation(event: Event) {
    if (!confirm(this._message)) {
      event.preventDefault();
    }
  }

}
