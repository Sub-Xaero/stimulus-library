import {EphemeralController} from "./utilities/ephemeral_controller";

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
      try {
        // Attempt smooth scrolling
        this.element.scrollIntoView({
          behavior: this.hasBehaviorValue ? this.behaviorValue : "smooth",
          block: this.hasBlockValue ? this.blockValue : "center",
          inline: this.hasInlineValue ? this.inlineValue : "center",
        });
      } catch {
        // Fallback to snap-scrolling
        this.element.scrollIntoView();
      }
      this.cleanupSelf();
    });
  }

}
