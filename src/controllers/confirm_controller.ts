import {BaseController} from '../utilities/base_controller';
import {isHTMLAnchorElement, isHTMLFormElement} from "../utilities/elements";

export class ConfirmController extends BaseController {

  static values = {
    message: String,
  };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : 'Are you sure?';
  }

  initialize() {
    this.confirm = this.confirm.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      let element = this.el;
      if (isHTMLFormElement(element)) {
        element.addEventListener("submit", this.confirm);
      } else if (isHTMLAnchorElement(element)) {
        element.addEventListener("click", this.confirm);
      } else {
        throw new Error("Can't handle confirmation on attached element");
      }
    });
  }

  disconnect() {
    let element = this.el;
    if (isHTMLFormElement(element)) {
      element.removeEventListener("submit", this.confirm);
    } else if (isHTMLAnchorElement(element)) {
      element.removeEventListener("click", this.confirm);
    }
  }

  confirm(event: Event) {
    if (!(window.confirm(this._message))) {
      event.preventDefault();
      this.dispatch(this.el, "confirm:cancelled");
    }
  }

}
