import {BaseController} from "../utilities/base_controller";
import {useInjectedElement} from "../mixins/use_injected_html";

export class StickyController extends BaseController {

  static classes = ["stuck"];
  static values = {mode: String};

  declare addStuckClasses: (el?: HTMLElement) => void;
  declare removeStuckClasses: (el?: HTMLElement) => void;

  declare readonly hasModeValue: "top" | "bottom";
  declare readonly modeValue: "top" | "bottom";

  _magicElement: HTMLDivElement | null = null;

  get defaultStuckClasses(): string[] {
    return ["stuck"];
  }

  get _mode(): 'beforebegin' | 'afterend' {
    if (this.hasModeValue) {
      if (!['top', 'bottom'].includes(this.modeValue)) {
        throw new Error(`The modeValue provided '${this.modeValue}' is not one of the recognised configuration options`);
      }
      if (this.modeValue === 'top') {
        return 'beforebegin';
      }
    }
    return "afterend";
  }

  connect() {
    this._magicElement = document.createElement("div");
    useInjectedElement(this, this.el, this._mode, this._magicElement);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target !== this._magicElement) {
          return;
        }
        if (entry.intersectionRatio === 0) {
          this.addStuckClasses();
        } else if (entry.intersectionRatio === 1) {
          this.removeStuckClasses();
        }
      });

    }, {
      threshold: [0, 1],
    });
    observer.observe(this._magicElement!);
  }

}
