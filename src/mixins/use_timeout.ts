import {Controller} from "stimulus";


export function useTimeout(controller: Controller, handler: (...args: any[]) => void, timeout: number) {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
  handler = handler.bind(controller);
  let timeoutHandle: ReturnType<typeof window.setTimeout> | null = null;

  let setup = () => timeoutHandle = setTimeout(handler, timeout);
  let teardown = () => {
    if (timeoutHandle !== null) {
      clearTimeout(timeoutHandle);
    }
  };

  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return teardown;
}
