import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";

export function useResizeObserver(
  controller: Controller,
  element: HTMLElement,
  handler: (entries: ResizeObserverEntry[]) => void,
  options: ResizeObserverOptions,
) {
  handler = handler.bind(controller);
  const observer: ResizeObserver = new ResizeObserver(handler);

  const setup = () => observer.observe(element, options);
  const teardown = () => observer.disconnect();

  useMixin(controller, setup, teardown);
  return teardown;
}
