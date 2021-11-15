import {BaseController} from '../../utilities/base_controller';
import {useIntersection, useWindowResize} from "stimulus-use";
import {isHTMLTextAreaElement} from "../../utilities/elements";
import {useEventListeners} from "../../mixins/use_event_listener";

export class AutosizeController extends BaseController {

  declare unobserveIntersection: () => void;
  declare isVisible: boolean;

  connect() {
    useWindowResize(this);
    let [, unobserveIntersection] = useIntersection(this);
    this.unobserveIntersection = unobserveIntersection;
    if (!isHTMLTextAreaElement(this.el)) {
      throw new Error(`Expected controller to be attached to a textarea, but was a '${this.el.tagName}'`);
    }

    requestAnimationFrame(() => {
      this.el.style.resize = "none";
      this.el.style.boxSizing = "border-box";

      this._handler();
      useEventListeners(this, window, ['resize'], this._handler);
      useEventListeners(this, this.el, ['input', 'focus'], this._handler, {debounce: 100});
    });
  }

  appear(_entry: IntersectionObserverEntry) {
    this.autosize(this.el as HTMLTextAreaElement);
    this.unobserveIntersection();
  }

  private _handler() {
    this.autosize(this.el as HTMLTextAreaElement);
  }

  private autosize(element: HTMLTextAreaElement) {
    let offset = element.offsetHeight - element.clientHeight;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + offset + "px";
  }

}
