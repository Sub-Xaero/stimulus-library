import { Controller } from "@hotwired/stimulus";
import { useMixin } from "./use_mixin";
import { getOtherRadiosInGroup, isElementCheckable, isHTMLInputElement, isHTMLSelectElement } from "@stimulus-library/utilities";
import { useEventListener } from "./use_event_listener";

const CACHE_ATTR_NAME = "data-detect-dirty-load-value";

export function useDirtyInputTracking(controller: Controller, element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const setup = () => {
    cacheLoadValues(element);
    checkDirty(element);
    useEventListener(
      controller,
      element,
      ["input", "change"],
      () => checkDirty(element),
      { debounce: 10 },
    );
  };
  const teardown = () => {

  };

  useMixin(controller, setup, teardown);
  return {
    restore: () => restoreElementFromLoadValue(element),
    teardown,
  };
}


export function useDirtyFormTracking(controller: Controller, form: HTMLFormElement) {
  const teardowns: (() => void)[] = [];
  const restores: (() => void)[] = [];

  const setup = () => {
    form.querySelectorAll("input, select, textarea").forEach((element) => {
      const functions = useDirtyInputTracking(controller, element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);
      teardowns.push(functions.teardown);
      restores.push(functions.restore);

    });
    useEventListener(controller, form, "input-dirtied", () => {
      form.setAttribute("data-dirty", "true");
      form.dispatchEvent(
        new CustomEvent("form-dirtied", {
          bubbles: true,
          cancelable: true,
          detail: {
            target: form,
          },
        }),
      );
    });
    useEventListener(controller, form, "input-cleaned", () => {
      if (form.querySelectorAll("[data-dirty=\"true\"]").length === 0) {
        form.removeAttribute("data-dirty");
        form.dispatchEvent(
          new CustomEvent("form-cleaned", {
            bubbles: true,
            cancelable: true,
            detail: {
              target: form,
            },
          }),
        );
      }
    });
  };
  const teardown = () => {
    teardowns.forEach((teardown) => teardown());
  };
  const restore = () => {
    restores.forEach((restore) => restore());
  };

  useMixin(controller, setup, teardown);
  return {
    restore,
    teardown,
  };
}

function getElementValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean | string {
  return isElementCheckable(element) ? element.checked : element.value;
}

function getElementLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean | string {
  const value = element.getAttribute(CACHE_ATTR_NAME);
  if (isElementCheckable(element)) {
    return value == null ? element.defaultChecked : value == "true";
  } else if (isHTMLSelectElement(element)) {
    const options = Array.from(element.options);
    options.forEach((option) => {
      if (option.defaultSelected) {
        return option.value;
      }
    });
  } else if (value !== null) {
    return value;
  }

  return value!;
}

function elementHasCachedLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
  return element.hasAttribute(CACHE_ATTR_NAME);
}

function checkDirty(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  if (isHTMLInputElement(element) && element.type == "radio") {
    getOtherRadiosInGroup(element).forEach((radio: Element) => radio.removeAttribute("data-dirty"));
  }
  if (isElementDirty(element)) {
    element.setAttribute("data-dirty", "true");
    element.form?.setAttribute("data-dirty", "true");
    element.dispatchEvent(
      new CustomEvent("input-dirtied", {
        bubbles: true,
        cancelable: true,
        detail: {
          target: element,
        },
      }),
    );
  } else {
    element.removeAttribute("data-dirty");
    element.dispatchEvent(
      new CustomEvent("input-cleaned", {
        bubbles: true,
        cancelable: true,
        detail: {
          target: element,
        },
      }),
    );
  }
}

function isElementDirty(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
  return getElementValue(element) !== getElementLoadValue(element);
}

function restoreElementFromLoadValue(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  const cacheValue = element.getAttribute(CACHE_ATTR_NAME);

  if (isElementCheckable(element)) {
    element.setAttribute(CACHE_ATTR_NAME, element.checked.toString());
    element.checked = cacheValue == null ? element.defaultChecked : cacheValue == "true";
  } else if (isHTMLSelectElement(element)) {
    if (cacheValue == null) {
      const options = Array.from(element.options);
      options.forEach((option) => {
        if (option.defaultSelected) {
          element.value = option.value;
          return;
        }
      });
    } else {
      element.value = cacheValue;
    }

  } else {
    element.value = cacheValue == null ? element.defaultValue : cacheValue;
  }
}

function cacheLoadValues(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): void {
  if (!elementHasCachedLoadValue(element) && isElementCheckable(element)) {
    element.setAttribute(CACHE_ATTR_NAME, element.checked.toString());
  } else {
    element.setAttribute(CACHE_ATTR_NAME, element.value.toString());
  }
}

export function isDirty(element: HTMLElement) {
  return element.hasAttribute("data-dirty");
}
