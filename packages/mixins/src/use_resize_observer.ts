import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./create_mixin";

export function useResizeObserver(
  controller: Controller,
  element: HTMLElement,
  handler: (entries: ResizeObserverEntry[]) => void,
  options: ResizeObserverOptions,
) {
  handler = handler.bind(controller);
  let observer: ResizeObserver = new ResizeObserver(handler);

  let setup = () => observer.observe(element, options);
  let teardown = () => observer.disconnect();

  useMixin(controller, setup, teardown);
  return teardown;
}
