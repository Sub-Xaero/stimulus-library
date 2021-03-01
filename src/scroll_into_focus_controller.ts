import {EphemeralController} from "./utilities/ephemeral_controller";
import {scrollToElement} from "./utilities/scroll";

export class ScrollIntoFocusController extends EphemeralController {

  static values = {
    behavior: String,
    block: String,
    inline: String,
  };

  declare behaviorValue: ScrollBehavior;
  declare hasBehaviorValue: boolean;
  declare blockValue: ScrollLogicalPosition;
  declare hasBlockValue: boolean;
  declare inlineValue: ScrollLogicalPosition;
  declare hasInlineValue: boolean;

  connect() {
    requestAnimationFrame(() => {
      // Attempt smooth scrolling, with polyfill
      scrollToElement(
        this.element,
        {
          behavior: this.hasBehaviorValue ? this.behaviorValue : "smooth",
          block: this.hasBlockValue ? this.blockValue : "center",
          inline: this.hasInlineValue ? this.inlineValue : "center",
        },
      ).catch(() => this.element.scrollIntoView()); // Fallback to snap-scrolling
      this._cleanupSelf();
    });
  }

}
