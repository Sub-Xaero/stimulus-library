import {Controller} from "stimulus";


export function useInterval(controller: Controller, handler: (...args: any[]) => void, interval: number) {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
  handler = handler.bind(controller);
  let intervalHandle: ReturnType<typeof window.setInterval> | null = null;

  let setup = () => intervalHandle = setInterval(handler, interval);
  let teardown = () => {
    if (intervalHandle !== null) {
      clearInterval(intervalHandle);
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
