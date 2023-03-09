import { BaseController, getScrollParent, scrollAbsoluteTop } from "@stimulus-library/utilities";

export class ScrollToTopController extends BaseController {

  static values = {
    mode: String,
  };

  declare modeValue: "nearest" | "document";
  declare hasModeValue: boolean;

  get _mode(): "nearest" | "document" {
    return this.hasModeValue ? this.modeValue : "document";
  }

  get _scrollTarget(): HTMLElement | Window | null {
    let target: null | HTMLElement | Window;
    if (this._mode == "document") {
      target = window;
    } else {
      target = getScrollParent(this.el);
    }
    return target;
  }

  async scroll(event?: Event) {
    event?.preventDefault();
    if (this._scrollTarget) {
      await scrollAbsoluteTop(this._scrollTarget);
    }
  }

}

