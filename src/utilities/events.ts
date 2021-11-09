import {Controller} from "stimulus";
import {logEvent} from "./logging";

export function dispatchEvent(controller: Controller, element: HTMLElement, eventName: string, options: CustomEventInit = {}) {
  let mergedOptions = Object.assign({}, {bubbles: true, cancelable: true, detail: {target: element}}, options);
  if (!!mergedOptions.detail.target) {
    mergedOptions.detail.target = element;
  }
  let event = new CustomEvent(eventName, mergedOptions);
  logEvent(controller, eventName, event, element);
  element.dispatchEvent(event);
}
