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

  dispatch(element: HTMLElement, eventName: string, options: CustomEventInit = {bubbles: true, cancelable: true, detail: {target: element}}) {
    let event = new CustomEvent(eventName, options);
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

}

function logProperty(prop: string): boolean {
  switch (prop) {
    case "application":
    case "element":
    case "constructor":
    case "initialize":
    case "log":
    case "data":
    case "valueDescriptorMap":
    case "identifier":
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

  return true;
}
