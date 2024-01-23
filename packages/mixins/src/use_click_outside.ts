import { Controller } from "@hotwired/stimulus";
import { isElementInViewport } from "@stimulus-library/utilities";
import { useEventListener } from "./use_event_listener";
import { useMixin } from "./use_mixin";

export function useClickOutside(controller: Controller, element: HTMLElement, callback: (event: Event) => void) {
  callback = callback.bind(controller);

  const handler = (event: Event) => {
    if (element.contains(event.target as Node) || (!isElementInViewport(element))) {
      return;
    }
    callback(event);
  };

  const { teardown } = useEventListener(controller, window, ["click", "touchend"], handler);
  useMixin(controller, () => void 0, teardown);

  return {
    teardown,
  };

}