import {BaseController} from '../../utilities/base_controller';
import {useIntersection, useWindowResize} from "stimulus-use";
import {isHTMLTextAreaElement} from "../../utilities/elements";

export class AutosizeController extends BaseController {

  declare unobserveIntersection: () => void;
  declare isVisible: boolean;

  initialize() {
    this._handler = this._handler.bind(this);
  }

  connect() {
    useWindowResize(this);
    let [, unobserveIntersection] = useIntersection(this);
    this.unobserveIntersection = unobserveIntersection;
    if (!isHTMLTextAreaElement(this.el)) {
      throw new Error(`Expected controller to be attached to a textarea, but was a '${this.el.tagName}'`);
    }

    requestAnimationFrame(() => {
      this._handler();
      this.el.style.resize = "none";
      this.el.style.boxSizing = "border-box";
      this.el.addEventListener("input", this._handler);
      this.el.addEventListener("focus", this._handler);
    });
  }

  disconnect() {
    this.el.removeEventListener("input", this._handler);
    this.el.removeEventListener("focus", this._handler);
  }

  windowResize() {
    this._handler();
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
