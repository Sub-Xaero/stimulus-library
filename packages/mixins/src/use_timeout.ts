import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";


export function useTimeout(controller: Controller, handler: (...args: any[]) => void, timeout: number) {
  let controllerDisconnect: () => void;
  let timeoutHandle: ReturnType<typeof window.setTimeout> | null = null;
  handler = handler.bind(controller);

  let newHandler = () => {
    handler();
    timeoutHandle = null;
    Object.assign(controller, {disconnect: controllerDisconnect});
  };

  let setup = () => timeoutHandle = setTimeout(newHandler, timeout);
  let teardown = () => {
    if (timeoutHandle !== null) {
      clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }
  };

  controllerDisconnect = useMixin(controller, setup, teardown);
  return teardown;
}
