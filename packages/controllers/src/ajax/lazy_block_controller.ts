import { LoadBlockController } from "./load_block_controller";
import { useIntersection } from "@stimulus-library/mixins";

export class LazyBlockController extends LoadBlockController {

  declare observe: () => void;
  declare unobserve: () => void;
  declare isVisible: boolean;
  declare disappear: () => void;

  async connect() {
    const element = this.el;

    if ("IntersectionObserver" in window) {
      const { observe, unobserve } = useIntersection(this, element, this.appear, null, { threshold: 0.3 });
      this.observe = observe;
      this.unobserve = unobserve;
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
