import {useIntersection} from "stimulus-use";
import {LoadBlockController} from "./load_block_controller";

export class LazyBlockController extends LoadBlockController {

  declare observe: () => void;
  declare unobserve: () => void;
  declare isVisible: boolean;
  declare disappear: () => void;

  async connect() {
    let element = this.el;

    if ("IntersectionObserver" in window) {
      [this.observe, this.unobserve] = useIntersection(this, {element, threshold: 0.3});
    } else {
      // Client doesn't support intersection observer, fallback to pre-loading
      await this.loadContent();
    }
  }

  async appear(entry: IntersectionObserverEntry) {
    if (entry.target === this.el && entry.isIntersecting) {
      await this.loadContent();
      if (this.unobserve) {
        this.unobserve();
      }
    }
  }

}
