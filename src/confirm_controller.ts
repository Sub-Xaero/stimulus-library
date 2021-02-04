import {BaseController} from './base_controller';
import {isHTMLFormElement, isHTMLLinkElement} from "./utilities/elements";

export class ConfirmController extends BaseController {

  static values = {
    message: String,
  };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  get message(): string {
    return this.hasMessageValue ? this.messageValue : 'Are you sure?';
  }

  initialize() {
    this.confirm = this.confirm.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      let element = this.element as HTMLElement;
      if (isHTMLFormElement(element)) {
        element.addEventListener("submit", this.confirm);
      } else if (isHTMLLinkElement(element)) {
        element.addEventListener("click", this.confirm);
      } else {
        throw new Error("Can't handle confirmation on attached element");
      }
    });
  }

  confirm(event: Event) {
    if (!(window.confirm(this.message))) {
      event.preventDefault();
      this.dispatch(this.element as HTMLElement, "confirm:cancelled");
    }
  }

}
