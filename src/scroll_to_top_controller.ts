import {Controller} from "stimulus";
import {getScrollParent, scrollToElement} from "./utilities/scroll";

export class ScrollToTopController extends Controller {

  static values = {
    mode: String,
  };

  declare modeValue: "nearest" | "document";
  declare hasModeValue: boolean;

  connect() {
  }

  scroll(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    let mode = this.hasModeValue ? this.modeValue : "document";
    let target: null | HTMLElement;
    if (mode == "document") {
      target = document.body;
    } else {
      target = getScrollParent(this.element as HTMLElement);
    }
    if (target == null) {
      return;
    }
    scrollToElement(target!, {behavior: "smooth", block: "start",}).catch(() => target!.scrollIntoView(false));
  }

}

