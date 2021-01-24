import {BaseController} from "./base_controller";
import {isHTMLLinkElement} from "./utilities/elements";
import {isTurboFrame} from "./utilities/turbo";

export class TurboFrameRCController extends BaseController {

  static values = {
    frameId: String,
    src: String,
    loadingMessage: String,
  };

  declare readonly frameIdValue: string;
  declare readonly srcValue: string;
  declare readonly hasSrcValue: boolean;
  declare readonly loadingMessageValue: string;
  declare readonly hasLoadingMessageValue: boolean;

  toggle(event?: Event | null) {
    if (event) {
      event.preventDefault();
    }
    let frame = this.getFrame();
    let frameSrc = frame.src;
    if (frameSrc == null || frameSrc !== this.getSrc()) {
      this.setSrc();
    } else {
      this.clear();
    }
  }

  setSrc(event?: Event | null) {
    if (event) {
      event.preventDefault();
    }
    let frame = this.getFrame();
    if (this.hasLoadingMessageValue) {
      frame.innerHTML = this.loadingMessageValue;
    }

    frame.src = this.getSrc();
  }

  clear(event?: Event | null) {
    if (event) {
      event.preventDefault();
    }
    let frame = this.getFrame();
    frame.src = "";
    frame.innerHTML = "";
  }

  private getFrame(): TurboFrame {
    let frame = document.getElementById(`${this.frameIdValue}`);
    if (frame == null) {
      throw new Error(`Could not find frame with ID '${this.frameIdValue}'`);
    }
    if (!isTurboFrame(frame)) {
      throw new Error(`Element targeted by ID '${this.frameIdValue}'`);
    } else {
      return frame;
    }
  }

  private getSrc(): string {
    let element = this.element as HTMLElement;
    if (this.hasSrcValue) {
      return this.srcValue;
    } else if (isHTMLLinkElement(element)) {
      return element.href;
    } else {
      throw new Error("No link given to drive frame to");
    }
  }

}
