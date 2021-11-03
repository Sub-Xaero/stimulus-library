import {BaseController} from "../utilities/base_controller";
import {useInjectedElement} from "../mixins/use_injected_html";

export class StickyController extends BaseController {

  static classes = ["stuck"];
  static values = {mode: String};

  declare readonly stuckClass: string;
  declare readonly hasStuckClass: boolean;

  declare readonly hasModeValue: "top" | "bottom";
  declare readonly modeValue: "top" | "bottom";

  _magicElement: HTMLDivElement | null = null;

  get _stuckClasses(): string[] {
    return this.stuckClass.split(' ');
  }

  get _defaultStuckClasses(): string[] {
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
          this._addStuckClasses();
        } else if (entry.intersectionRatio === 1) {
          this._removeStuckClasses();
        }
      });

    }, {
      threshold: [0, 1],
    });
    observer.observe(this._magicElement!);
  }

  private _addStuckClasses(el: HTMLElement = this.el) {
    if (this.hasStuckClass) {
      el.classList.add(...this._stuckClasses);
    } else {
      el.classList.add(...this._defaultStuckClasses);
    }
  }

  private _removeStuckClasses(el: HTMLElement = this.el) {
    if (this.hasStuckClass) {
      el.classList.remove(...this._stuckClasses);
    } else {
      el.classList.remove(...this._defaultStuckClasses);
    }
  }

}
