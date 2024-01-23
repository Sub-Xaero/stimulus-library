import { BaseController, isHTMLTextAreaElement } from "@stimulus-library/utilities";
import { useEventListener, useIntersection } from "@stimulus-library/mixins";

export class AutosizeController extends BaseController {

  declare _unobserveIntersection: () => void;

  connect() {
    const { teardown } = useIntersection(this, this.el, this.appear);
    this._unobserveIntersection = teardown;
    if (!isHTMLTextAreaElement(this.el)) {
      throw new Error(`Expected controller to be attached to a textarea, but was a '${this.el.tagName}'`);
    }

    requestAnimationFrame(() => {
      this.el.style.resize = "none";
      this.el.style.boxSizing = "border-box";

      this._handler();
      useEventListener(this, window, ["resize"], this._handler);
      useEventListener(this, this.el, ["input", "change", "focus"], this._handler, { debounce: 100 });
    });
  }

  appear(_entry: IntersectionObserverEntry) {
    this.autosize(this.el as HTMLTextAreaElement);
    this._unobserveIntersection();
  }

  private _handler() {
    this.autosize(this.el as HTMLTextAreaElement);
  }

  private autosize(element: HTMLTextAreaElement) {
    const offset = element.offsetHeight - element.clientHeight;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + offset + "px";
  }

}
