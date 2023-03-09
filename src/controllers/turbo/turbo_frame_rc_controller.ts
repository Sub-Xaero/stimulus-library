import {BaseController} from "../../utilities/base_controller";
import {isHTMLAnchorElement} from "../../utilities/elements";
import {isTurboFrame} from "../../utilities/turbo";

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

  toggle(event?: Event) {
    event?.preventDefault();
    let frame = this._getFrame();
    let frameSrc = frame.src;
    if (frameSrc == null || frameSrc !== this._getSrc()) {
      this._setSrc();
    } else {
      this._clear();
    }
  }

  setSrc(event?: Event) {
    event?.preventDefault();
    this._setSrc();
  }

  clear(event?: Event) {
    event?.preventDefault();
    this._clear();
  }

  private _setSrc() {
    let frame = this._getFrame();
    if (this.hasLoadingMessageValue) {
      frame.innerHTML = this.loadingMessageValue;
    }
    frame.src = this._getSrc();
  }

  private _clear() {
    let frame = this._getFrame();
    frame.src = "";
    frame.innerHTML = "";
  }

  private _getFrame(): TurboFrame {
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

  private _getSrc(): string {
    let element = this.el;
    if (this.hasSrcValue) {
      return this.srcValue;
    } else if (isHTMLAnchorElement(element)) {
      return element.href;
    } else {
      throw new Error("No link given to drive frame to");
    }
  }

}
