import {Controller} from "@hotwired/stimulus";

export function useMixin(controller: Controller, setup: () => void, teardown: () => void) {
  const controllerDisconnect = controller.disconnect.bind(controller);

  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return controllerDisconnect;
}