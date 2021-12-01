import {Controller} from "stimulus";
import {isElementInViewport} from "../utilities/elements";
import {useEventListener} from "../mixins/use_event_listener";
import {useMixin} from "./create_mixin";

export function useClickOutside(controller: Controller, element: HTMLElement, callback: (event: Event) => void) {
  callback = callback.bind(controller);

  const handler = (event: Event) => {
    if (element.contains(event.target as Node) || (!isElementInViewport(element))) {
      return;
    }
    callback(event);
  };

  let {teardown} = useEventListener(controller, window, ["click", "touchend"], handler);
  useMixin(controller, () => {}, teardown);

  return {
    teardown
  };

}