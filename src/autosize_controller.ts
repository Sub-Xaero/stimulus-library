import {useWindowResize} from "stimulus-use";
import {BaseController} from "./base_controller";

export class AutosizeController extends BaseController {

  private boundHandler = this.handler.bind(this);

  connect() {
    let target = this.element as HTMLTextAreaElement;
    target.style.resize = "none";
    target.style.boxSizing = "border-box";
    target.addEventListener("input", this.boundHandler);
    target.addEventListener("focus", this.boundHandler);
    useWindowResize(this);
    requestAnimationFrame(this.boundHandler);
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
