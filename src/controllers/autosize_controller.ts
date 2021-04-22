import {useWindowResize} from "stimulus-use";
import {BaseController} from "../utilities/base_controller";

export class AutosizeController extends BaseController {

  initialize() {
    this._handler = this._handler.bind(this);
  }

  connect() {
    let target = this.el as HTMLTextAreaElement;
    target.style.resize = "none";
    target.style.boxSizing = "border-box";
    target.addEventListener("input", this._handler);
    target.addEventListener("focus", this._handler);
    useWindowResize(this);
    requestAnimationFrame(this._handler);
  }

  windowResize() {
    this._handler();
  }

  private _handler() {
    this.autosize(this.el as HTMLTextAreaElement);
  };

  private autosize(element: HTMLTextAreaElement) {
    let offset = element.offsetHeight - element.clientHeight;
    element.style.height = "auto";
    element.style.height = element.scrollHeight + offset + "px";
  }

}
