import { BaseController } from "@stimulus-library/utilities";
import { installClassMethods, useInjectedElement, useIntersection } from "@stimulus-library/mixins";

export class StickyController extends BaseController {

  static classes = ["stuck"];
  static values = { mode: String };

  declare addStuckClasses: (el?: HTMLElement) => void;
  declare removeStuckClasses: (el?: HTMLElement) => void;

  declare readonly hasModeValue: boolean;
  declare readonly modeValue: "top" | "bottom";

  _magicElement: HTMLDivElement | null = null;

  get defaultStuckClasses(): string[] {
    return ["stuck"];
  }

  get _mode(): "beforebegin" | "afterend" {
    if (this.hasModeValue) {
      if (!["top", "bottom"].includes(this.modeValue)) {
        throw new Error(`The modeValue provided '${this.modeValue}' is not one of the recognised configuration options`);
      }
      if (this.modeValue === "bottom") {
        return "afterend";
      }
    }
    return "beforebegin";
  }

  connect() {
    installClassMethods(this);
    this._magicElement = document.createElement("div");
    useInjectedElement(this, this.el, this._mode, this._magicElement, { cleanup: true });
    // The magic element sits at the sticky element's natural position, so when it scrolls out of view the element is stuck
    useIntersection(this, this._magicElement, () => this.removeStuckClasses(), () => this.addStuckClasses());
  }

}
