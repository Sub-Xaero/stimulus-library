import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";
import { useTimeout } from "./use_timeout";
import { isHTMLInputElement } from "@stimulus-library/utilities";

export function useTemporaryContent(controller: Controller, target: HTMLElement, content: string, timeout?: number, teardownCallback?: () => void) {

  const setContent = (element: HTMLElement | HTMLInputElement, text: string) => {
    if (isHTMLInputElement(element)) {
      element.value = text;
    } else {
      element.textContent = text;
    }
  };

  const getContent = (element: HTMLElement): string => {
    return isHTMLInputElement(element) ? element.value : element.innerHTML;
  };

  let cleanupTimeout: () => void = () => void 0;
  const originalText: string = getContent(target);

  const teardown = () => {
    setContent(target, originalText);
    cleanupTimeout();
    if (teardownCallback) {
      teardownCallback.call(controller);
    }
  };

  const setup = () => {
    setContent(target, content);
    if (timeout !== undefined) {
      cleanupTimeout = useTimeout(controller, teardown, timeout);
    }
  };

  useMixin(controller, setup, teardown);

  return {
    teardown,
    update(newContent: string) {
      setContent(target, newContent);
    },
  };
}
