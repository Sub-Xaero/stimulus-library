import { Controller } from "@hotwired/stimulus";
import { useEventListener } from "./use_event_listener";

export function useTextSelection(controller: Controller, handler: (selectedString: Selection | null) => void) {
  handler = handler.bind(controller);

  const onSelectionChange = () => {
    const selection = window.getSelection();
    handler(selection);
  };

  const { teardown: unwatch } = useEventListener(controller, window.document, "selectionchange", onSelectionChange);

  const teardown = () => {
    unwatch();
  };

  return {
    teardown,
  };
}
