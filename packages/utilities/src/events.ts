import { Controller } from "@hotwired/stimulus";
import { logEvent } from "./logging";

export function dispatchEvent(controller: Controller, element: HTMLElement, eventName: string, options: CustomEventInit = {}) {
  const mergedOptions = Object.assign({}, { bubbles: true, cancelable: true, detail: { target: element } }, options);
  if (!mergedOptions.detail.target) {
    mergedOptions.detail.target = element;
  }
  const event = new CustomEvent(eventName, mergedOptions);
  logEvent(controller, eventName, event, element);
  element.dispatchEvent(event);
}
