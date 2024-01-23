import { Controller } from "@hotwired/stimulus";
import { debounce, EventBus, wrapArray } from "@stimulus-library/utilities";
import { useMixin } from "./use_mixin";

export function useEventBus(controller: Controller, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: { debounce?: number }) {
  const options = opts;

  if (options?.debounce) {
    handler = debounce(handler.bind(controller), options.debounce);
    delete options.debounce;
  } else {
    handler = handler.bind(controller);
  }

  const eventNames = wrapArray(eventNameOrNames);
  const setup = () => eventNames.forEach(eventName => EventBus.on(eventName, handler));
  const teardown = () => eventNames.forEach(eventName => EventBus.off(eventName, handler));

  useMixin(controller, setup, teardown);
  return { setup, teardown };
}
