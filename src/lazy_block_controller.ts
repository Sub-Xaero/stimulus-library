import {useIntersection} from "stimulus-use";
import {AsyncBlockController} from "./async_block_controller";

export class LazyBlockController extends AsyncBlockController {

  declare observe: () => void;
  declare unobserve: () => void;
  declare isVisible: boolean;
  declare disappear: () => void;

  connect() {
    let element = this.el;

    if ("IntersectionObserver" in window) {
      [this.observe, this.unobserve] = useIntersection(this, {element, threshold: 0.3});
    } else {
      // Client doesn't support intersection observer, fallback to pre-loading
      this.loadContent();
    }
  }

  appear(entry: IntersectionObserverEntry) {
    if (entry.target === this.el && entry.isIntersecting) {
      this.loadContent();
      if (this.unobserve) {
        this.unobserve();
      }
    }
  }

}
