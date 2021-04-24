import {Context, Controller} from "stimulus";

export class BaseController extends Controller {

  constructor(context: Context) {
    super(context);
    return new Proxy(this, {
      get: (obj, prop) => {
        let returnVal = Reflect.get(obj, prop);
        let self = this;
        if (logProperty(prop.toString())) {
          if (typeof returnVal == "function") {
            return new Proxy(returnVal, {
              apply(target: any, thisArg: any, argArray?: any): any {
                self.log(prop.toString(), {
                  args: argArray,
                });
                return Reflect.apply(target, thisArg, argArray);
              },
            });
          } else {
            this.log(prop.toString());
          }
        }
        return returnVal;
      },
    });
  }

  get el(): HTMLElement {
    return this.element as HTMLElement;
  }

  get isTurboPreview(): boolean {
    return document.documentElement.hasAttribute('data-turbo-preview') || document.documentElement.hasAttribute('data-turbolinks-preview');
  }

  get isTurbolinksPreview(): boolean {
    return this.isTurboPreview;
  }

  get csrfToken(): string | null {
    return this.metaValue('csrf-token');
  }

  metaValue(name: string): string | null {
    const element = document.head.querySelector(`meta[name="${name}"]`);
    return element?.getAttribute('content') || null;
  }

  dispatch(element: HTMLElement, eventName: string, options: CustomEventInit = {}) {
    let mergedOptions = Object.assign({}, {bubbles: true, cancelable: true, detail: {target: element}}, options);
    if (!!mergedOptions.detail.target) {
      mergedOptions.detail.target = element;
    }
    let event = new CustomEvent(eventName, mergedOptions);
    this.logEvent(eventName, event, element);
    element.dispatchEvent(event);
  }

  log(functionName: string, args: {} = {}): void {
    // @ts-ignore
    if (!this.application.debug) {
      return;
    }
    let logger = console;
    logger.groupCollapsed(`%c${this.identifier} %c#${functionName}`, "color: #3B82F6", "color: unset");
    logger.log({
      element: this.element,
      ...args,
    });
    logger.groupEnd();
  }

  logEvent(eventName: string, event: CustomEvent, element: HTMLElement) {
    // @ts-ignore
    if (!this.application.debug) {
      return;
    }
    let logger = console;
    logger.groupCollapsed(`%c${this.identifier} %c${eventName}%c`, "color: #3B82F6", "color: #0be000", "color: unset");
    logger.log({element});
    logger.groupEnd();
  }

}

function logProperty(prop: string): boolean {
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

  return true;
}
