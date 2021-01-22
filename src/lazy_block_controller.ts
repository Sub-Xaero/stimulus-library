import {useIntersection} from "stimulus-use";
import {IntersectionOptions} from "stimulus-use/dist/use-intersection/use-intersection";
import {AsyncBlockController} from "./async_block_controller";

export class LazyBlockController extends AsyncBlockController {

  declare observe: () => void;
  declare unobserve: () => void;
  declare options: IntersectionOptions;
  declare isVisible: boolean;
  declare disappear: () => void;

  connect() {
    let element = this.element;
    this.options = {element, threshold: 0.3};

    if ("IntersectionObserver" in window) {
      [this.observe, this.unobserve] = useIntersection(this, this.options);
    } else {
      // Client doesn't support intersection observer, fallback to pre-loading
      this.loadContent();
    }
  }

  appear(entry: IntersectionObserverEntry) {
    let element = this.element as HTMLImageElement;
    if (element.src !== "") {
      return;
    }
    if (entry.target === element && entry.isIntersecting) {
      this.loadContent();
      if (this.unobserve) {
        this.unobserve();
      }
    }
  }

}
