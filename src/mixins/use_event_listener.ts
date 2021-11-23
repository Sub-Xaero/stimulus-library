import {Controller} from "stimulus";
import {debounce} from "lodash-es";
import {wrapArray} from "../utilities/arrays";

export function useEventListener(controller: Controller, element: Document | Window | HTMLElement, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
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
  let setup = () => eventNames.forEach(eventName => element.addEventListener(eventName, handler, options));
  let teardown = () => eventNames.forEach(eventName => element.removeEventListener(eventName, handler));

  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return {setup, teardown};
}

export function useEventListeners(controller: Controller, element: Document | Window | HTMLElement, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  return useEventListener(controller, element, eventNameOrNames, handler, opts);
}

export function useCollectionEventListener(controller: Controller, elements: Array<Document | Window | HTMLElement>, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  let handlers: Array<{ setup: () => void, teardown: () => void, }> = [];
  elements.forEach(el => {
    let {setup, teardown} = useEventListener(controller, el, eventNameOrNames, handler, opts);
    handlers.push({setup, teardown});
  });
  return [
    () => handlers.forEach(h => h.setup()),
    () => handlers.forEach(h => h.teardown()),
  ];
}

export function useCollectionEventListeners(controller: Controller, elements: Array<Document | Window | HTMLElement>, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  return useCollectionEventListener(controller, elements, eventNameOrNames, handler, opts);
}
