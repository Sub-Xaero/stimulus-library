import {BaseController} from "../utilities/base_controller";

export class StickyController extends BaseController {

  static classes = ["stuck"];
  static values = {
    mode: String,
  };

  declare readonly hasStuckClass: boolean;
  declare readonly stuckClass: string;
  declare readonly hasModeValue: "top" | "bottom";
  declare readonly modeValue: "top" | "bottom";

  _magicElement: HTMLDivElement | null = null;

  get _mode(): "top" | "bottom" {
    return this.hasModeValue ? this.modeValue : "top";
  }

  createMagicElement() {
    // Magic element placed next to the sticky el that acts as an external border.
    // When the magic element is off the page, we know that the sticky el is "stuck"
    if (this._magicElement !== null) {
      return;
    }

    this._magicElement = document.createElement("div");
    switch (this._mode) {
      case "top":
        this.el.insertAdjacentElement("beforebegin", this._magicElement);
        break;
      case "bottom":
        this.el.insertAdjacentElement("afterend", this._magicElement);
        break;
    }
  }

  connect() {
    let element = this.el;
    this.createMagicElement();

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target !== this._magicElement) {
          return;
        }
        if (entry.intersectionRatio === 0) {
          element.classList.add(this.hasStuckClass ? this.stuckClass : "stuck");
        } else if (entry.intersectionRatio === 1) {
          element.classList.remove(this.hasStuckClass ? this.stuckClass : "stuck");
        }
      });

    }, {
      threshold: [0, 1],
    });
    observer.observe(this._magicElement!);
  }

}
