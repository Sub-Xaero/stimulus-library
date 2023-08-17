import { BaseController, scrollToElement } from "@stimulus-library/utilities";

export class ScrollToController extends BaseController {

  static values = {
    selector: String,
    behavior: String,
    block: String,
    inline: String,
  };

  declare selectorValue: string;
  declare behaviorValue: ScrollBehavior;
  declare hasBehaviorValue: boolean;
  declare blockValue: ScrollLogicalPosition;
  declare hasBlockValue: boolean;
  declare inlineValue: ScrollLogicalPosition;
  declare hasInlineValue: boolean;

  scroll() {
    const target = document.querySelector(this.selectorValue);
    if (!target) {
      console.warn(`Could not find target for '${this.selectorValue}'`);
      return;
    }

    scrollToElement(
      target!,
      {
        behavior: this.hasBehaviorValue ? this.behaviorValue : "smooth",
        block: this.hasBlockValue ? this.blockValue : "center",
        inline: this.hasInlineValue ? this.inlineValue : "center",
      },
    ).catch(() => target!.scrollIntoView()); // Fallback to snap-scrolling
  }

}
