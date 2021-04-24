import {BaseController} from "../../utilities/base_controller";
import {getScrollParent, scrollToElement} from "../../utilities/scroll";

export class ScrollToBottomController extends BaseController {

  static values = {
    mode: String,
  };

  declare modeValue: "nearest" | "document";
  declare hasModeValue: boolean;

  scroll(event?: Event) {
    event?.preventDefault();
    let mode = this.hasModeValue ? this.modeValue : "document";
    let target: null | HTMLElement;
    if (mode == "document") {
      target = document.body;
    } else {
      target = getScrollParent(this.el);
    }
    if (target == null) {
      return;
    }
    scrollToElement(target!, {behavior: "smooth", block: "end"}).catch(() => target!.scrollIntoView(false));
  }

}

