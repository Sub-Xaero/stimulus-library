import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";

export function useInterval(controller: Controller, handler: (...args: any[]) => void, interval: number) {
  handler = handler.bind(controller);
  let intervalHandle: ReturnType<typeof window.setInterval> | null = null;

  const setup = () => intervalHandle = setInterval(handler, interval);
  const teardown = () => {
    if (intervalHandle !== null) {
      clearInterval(intervalHandle);
    }
  };

  useMixin(controller, setup, teardown);
  return teardown;
}
