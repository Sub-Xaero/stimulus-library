import {Controller} from "@hotwired/stimulus";
import debounce from "lodash-es/debounce";
import {wrapArray} from "../utilities/arrays";
import {useMixin} from "./create_mixin";

export function useEventListener(controller: Controller, element: Document | Window | HTMLElement, eventNameOrNames: string | string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  if (opts?.debounce) {
    handler = debounce(handler.bind(controller), opts.debounce);
    delete opts.debounce;
  } else {
    handler = handler.bind(controller);
  }

  let eventNames = wrapArray(eventNameOrNames);
  let setup = () => eventNames.forEach(eventName => element.addEventListener(eventName, handler, opts));
  let teardown = () => eventNames.forEach(eventName => element.removeEventListener(eventName, handler));

  useMixin(controller, setup, teardown);
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
