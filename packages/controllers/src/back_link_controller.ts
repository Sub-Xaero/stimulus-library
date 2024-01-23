import { BaseController } from "@stimulus-library/utilities";
import { useEventListener, useTimeout } from "@stimulus-library/mixins";

export class BackLinkController extends BaseController {

  static values = { timeout: Number, pages: Number };

  declare readonly timeoutValue: number;
  declare readonly hasTimeoutValue: boolean;
  declare readonly pagesValue: number;
  declare readonly hasPagesValue: boolean;

  get _pages(): number {
    return this.hasPagesValue ? Math.abs(this.pagesValue) : 1;
  }

  get _timeout(): number {
    return this.hasTimeoutValue ? this.timeoutValue : 1500;
  }

  connect() {
    useEventListener(this, this.el, "click", this.goBack);
  }

  goBack(event?: Event) {
    event?.preventDefault();
    history.go(-this._pages);
    if ((this.el as HTMLAnchorElement).href) {
      useTimeout(this, this.fallback, this._timeout);
    }
  }

  fallback() {
    window.location.href = (this.el as HTMLAnchorElement).href;
  }

}
