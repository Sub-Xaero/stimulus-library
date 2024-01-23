import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";


export function useTimeout(controller: Controller, handler: (...args: any[]) => void, timeout: number) {
  let controllerDisconnect: () => void;
  let timeoutHandle: ReturnType<typeof window.setTimeout> | null = null;
  handler = handler.bind(controller);

  const newHandler = () => {
    handler();
    timeoutHandle = null;
    Object.assign(controller, { disconnect: controllerDisconnect });
  };

  const setup = () => timeoutHandle = setTimeout(newHandler, timeout);
  const teardown = () => {
    if (timeoutHandle !== null) {
      clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }
  };

  controllerDisconnect = useMixin(controller, setup, teardown);
  return teardown;
}
