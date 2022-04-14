import {Controller} from "@hotwired/stimulus";
import debounce from "lodash-es/debounce";
import {EventBus} from "../utilities/event_bus";
import {wrapArray} from "../utilities/arrays";
import {useMixin} from "./create_mixin";

export function useEventBus(controller: Controller, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: { debounce?: number }) {
  let options = opts;

  if (options?.debounce) {
    handler = debounce(handler.bind(controller), options.debounce);
    delete options.debounce;
  } else {
    handler = handler.bind(controller);
  }

  let eventNames = wrapArray(eventNameOrNames);
  let setup = () => eventNames.forEach(eventName => EventBus.on(eventName, handler));
  let teardown = () => eventNames.forEach(eventName => EventBus.off(eventName, handler));

  useMixin(controller, setup, teardown);
  return {setup, teardown};
}
