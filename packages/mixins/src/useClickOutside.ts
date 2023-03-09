import { Controller } from "@hotwired/stimulus";
import { isElementInViewport } from "@stimulus-library/utilities";
import { useEventListener } from "./useEventListener";
import { useMixin } from "./createMixin";

export function useClickOutside(controller: Controller, element: HTMLElement, callback: (event: Event) => void) {
  callback = callback.bind(controller);

  const handler = (event: Event) => {
    if (element.contains(event.target as Node) || (!isElementInViewport(element))) {
      return;
    }
    callback(event);
  };

  let {teardown} = useEventListener(controller, window, ["click", "touchend"], handler);
  useMixin(controller, () => void 0, teardown);

  return {
    teardown,
  };

}