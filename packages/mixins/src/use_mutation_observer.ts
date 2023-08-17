import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";

export function useMutationObserver(
  controller: Controller,
  element: HTMLElement,
  handler: (entries: MutationRecord[]) => void,
  options: MutationObserverInit,
) {
  handler = handler.bind(controller);
  const observer: MutationObserver = new MutationObserver(handler);

  const setup = () => observer.observe(element, options);
  const teardown = () => observer.disconnect();

  useMixin(controller, setup, teardown);
  return teardown;
}
