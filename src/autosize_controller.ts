import {Controller} from "stimulus";
import {useWindowResize} from "stimulus-use";

export class AutosizeController extends Controller {

  private boundHandler = this.handler.bind(this);
  declare observe: () => void;
  declare unobserve: () => void;

  connect() {
    let target = this.element as HTMLTextAreaElement;
    target.style.resize = "none";
    target.style.boxSizing = "border-box";

    useWindowResize(this);

    setTimeout(this.boundHandler, 1000);
    target.addEventListener("input", this.boundHandler);
    target.addEventListener("focus", this.boundHandler);
  }

  windowResize() {
    this.handler();
  }

  private handler() {
    this.autosize(this.element as HTMLTextAreaElement);
  };

  private autosize(element: HTMLTextAreaElement) {
    let offset = element.offsetHeight - element.clientHeight;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + offset + "px";
  }

}
