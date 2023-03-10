import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./create_mixin";

export function useMutationObserver(
  controller: Controller,
  element: HTMLElement,
  handler: (entries: MutationRecord[]) => void,
  options: MutationObserverInit,
) {
  handler = handler.bind(controller);
  let observer: MutationObserver = new MutationObserver(handler);

  let setup = () => observer.observe(element, options);
  let teardown = () => observer.disconnect();

  useMixin(controller, setup, teardown);
  return teardown;
}
