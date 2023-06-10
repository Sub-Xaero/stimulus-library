import { Controller } from "@hotwired/stimulus";
import { useEventListener } from "./use_event_listener";

export function useTextSelection(controller: Controller, handler: (selectedString: Selection | null) => void) {
  handler = handler.bind(controller);

  let onSelectionChange = () => {
    let selection = window.getSelection();
    handler(selection);
  };

  let {teardown: unwatch} = useEventListener(controller, window.document, 'selectionchange', onSelectionChange);

  let teardown = () => {
    unwatch();
  };

  return {
    teardown,
  };
}
