import { Controller } from "@hotwired/stimulus";
import { useEventListener } from "./use_event_listener";
import { useMixin } from "./use_mixin";

export function useHover(controller: Controller, element: HTMLElement, enter?: ((event: Event) => void) | null, leave?: ((event: Event) => void) | null) {
  let teardownEnter: null | (() => void) = null;
  let teardownLeave: null | (() => void) = null;

  if (enter) {
    enter = enter.bind(controller);
    const { teardown: _teardownEnter } = useEventListener(controller, element, "mouseenter", enter);
    teardownEnter = _teardownEnter;
  }
  if (leave) {
    leave = leave.bind(controller);
    const { teardown: _teardownLeave } = useEventListener(controller, element, "mouseleave", leave);
    teardownLeave = _teardownLeave;
  }

  const setup = () => void 0;
  const teardown = () => {
    if (teardownEnter) {
      teardownEnter();
    }
    if (teardownLeave) {
      teardownLeave();
    }
  };

  useMixin(controller, setup, teardown);
  return {
    teardown,
  };

}