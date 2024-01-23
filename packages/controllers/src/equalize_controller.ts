import { BaseController, debounce } from "@stimulus-library/utilities";
import { useIntersection } from "@stimulus-library/mixins";

export class EqualizeController extends BaseController {

  static targets = ["watch"];

  declare readonly watchTargets: HTMLElement[];
  declare observer: ResizeObserver;
  declare _unobserveIntersection: () => void;

  initialize() {
    this._equalize = debounce(this._equalize.bind(this), 100);
    this.observer = new ResizeObserver((_entries) => this._equalize());
  }

  connect() {
    const { teardown } = useIntersection(this, this.el, this.appear);
    this._unobserveIntersection = teardown;

    requestAnimationFrame(this._equalize);
  }

  disconnect() {
    this._unequalize();
  }

  watchTargetConnected(element: HTMLElement) {
    this.observer.observe(element);
    this._equalize();
  }

  watchTargetDisconnected(element: HTMLElement) {
    this.observer.unobserve(element);
    this._equalize();
  }

  appear(_entry: IntersectionObserverEntry) {
    this._unobserveIntersection();
    this._equalize();
  }

  _equalize() {
    this._unequalize();

    let maxHeight = 0;
    Array.from(this.watchTargets).forEach(target => maxHeight = Math.max(maxHeight, target.getBoundingClientRect().height));
    Array.from(this.watchTargets).forEach(target => target.style.minHeight = `${maxHeight}px`);
  }

  _unequalize() {
    Array.from(this.watchTargets).forEach(target => target.style.minHeight = "");
  }

}
