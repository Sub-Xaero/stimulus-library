import {BaseController} from '../utilities/base_controller';
import {isHTMLAnchorElement, isHTMLFormElement} from "../utilities/elements";
import {useEventListener} from "../mixins/use_event_listener";

export class ConfirmController extends BaseController {

  static values = {
    message: String,
  };

  declare readonly messageValue: string;
  declare readonly hasMessageValue: boolean;

  get _message(): string {
    return this.hasMessageValue ? this.messageValue : 'Are you sure?';
  }

  get _eventType(): "submit" | "click" {
    if (isHTMLFormElement(this.el)) {
      return "submit";
    } else if (isHTMLAnchorElement(this.el)) {
      return "click";
    } else {
      throw new Error("Can't handle confirmation on attached element");
    }
  }

  connect() {
    requestAnimationFrame(() => {
      useEventListener(this, this.el, this._eventType, this.confirm);
    });
  }

  confirm(event: Event) {
    if (!(window.confirm(this._message))) {
      event.preventDefault();
      this.dispatch(this.el, "confirm:cancelled");
    }
  }

}
