import {useIntersection} from "stimulus-use";
import {AsyncBlockController} from "./async_block_controller";

export class LazyBlockController extends AsyncBlockController {

  private unobserve = null;

  connect() {
    let element = this.element;

    if ("IntersectionObserver" in window) {
      let [observe, unobserve] = useIntersection(this, {element, threshold: 0.3});
      this.unobserve = unobserve;
    } else {
      // Client doesn't support intersection observer, fallback to pre-loading
      this.loadContent();
    }
  }

  private appear(entry) {
    let element = this.element;
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
