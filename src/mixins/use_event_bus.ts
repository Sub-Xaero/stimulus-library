import {Controller} from "stimulus";
import {debounce} from "lodash-es";
import {EventBus} from "../utilities/event_bus";
import {wrapArray} from "../utilities/arrays";

export function useEventBus(controller: Controller, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: { debounce?: number }) {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
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

  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return {setup, teardown};
}
