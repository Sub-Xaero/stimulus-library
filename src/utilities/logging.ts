import {Controller} from "stimulus";

export function logProperty(prop: string): boolean {
  switch (prop) {
    case "application":
    case "el":
    case "element":
    case "constructor":
    case "initialize":
    case "log":
    case "logEvent":
    case "dispatch":
    case "data":
    case "valueDescriptorMap":
    case "mutate":
    case "identifier":
      return false;
  }

  if (/^_.*?$/.test(prop)) {
    return false;
  }
  if (/^.*?Target(s)?$/.test(prop)) {
    return false;
  }
  if (/^.*?Value$/.test(prop)) {
    return false;
  }
  if (/^.*?ValueChanged$/.test(prop)) {
    return false;
  }
  if (/^.*?Class$/.test(prop)) {
    return false;
  }
  if (/^.*?Classes$/.test(prop)) {
    return false;
  }
  if (/^.*?ClassesPresent$/.test(prop)) {
    return false;
  }

  return true;
}


export function log(controller: Controller, functionName: string, args: {} = {}): void {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(`%c${controller.identifier} %c#${functionName}`, "color: #3B82F6", "color: unset");
  logger.log({
    element: controller.element,
    controller: controller,
    ...args,
  });
  logger.groupEnd();
}

export function warn(controller: Controller, warning: string, args: {} = {}): void {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(`%c${controller.identifier} %c#${warning}`, "color: F39B1AFF", "color: unset");
  logger.warn({
    element: controller.element,
    controller: controller,
    ...args,
  });
  logger.groupEnd();
}

export function logEvent(controller: Controller, eventName: string, event: CustomEvent, element: HTMLElement) {
  if (!controller.application.debug) {
    return;
  }
  let logger = console;
  logger.groupCollapsed(`%c${controller.identifier} %c${eventName}%c`, "color: #3B82F6", "color: #0be000", "color: unset");
  logger.log({element});
  logger.groupEnd();
}