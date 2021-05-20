import {BaseController} from "../utilities/base_controller";

export class BackLinkController extends BaseController {

  static values = {timeout: Number, pages: Number};

  declare readonly timeoutValue: number;
  declare readonly hasTimeoutValue: boolean;
  declare readonly pagesValue: number;
  declare readonly hasPagesValue: boolean;
  _timeoutHandle: null | ReturnType<typeof window.setTimeout> = null;

  get _pages(): number {
    return this.hasPagesValue ? Math.abs(this.pagesValue) : 1;
  }

  get _timeout(): number {
    return this.hasTimeoutValue ? this.timeoutValue : 1500;
  }

  initialize() {
    this.goBack = this.goBack.bind(this);
    this.fallback = this.fallback.bind(this);
  }

  connect() {
    this.el.addEventListener("click", this.goBack);
  }

  disconnect() {
    this.el.removeEventListener("click", this.goBack);
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
  }

  goBack(event?: Event) {
    event?.preventDefault();
    history.go(-this._pages);
    if ((this.el as HTMLAnchorElement).href) {
      this._timeoutHandle = setTimeout(this.fallback, this._timeout);
    }
  }

  fallback() {
    window.location.href = (this.el as HTMLAnchorElement).href;
  }

}
