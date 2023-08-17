import { Context, Controller } from "@hotwired/stimulus";
import { log, logProperty } from "./logging";
import { dispatchEvent } from "./events";

export class BaseController extends Controller {

  constructor(context: Context) {
    super(context);
    // @ts-ignore
    if (!this.application.debug) {
      return this;
    }
    return new Proxy(this, {
      get: (obj, prop) => {
        const returnVal = Reflect.get(obj, prop);
        const self = this;
        if ("logFormattedMessage" in this.application) {
          return returnVal;
        }
        if (logProperty(prop.toString())) {
          if (typeof returnVal == "function") {
            return new Proxy(returnVal, {
              apply(target: any, thisArg: any, argArray?: any): any {
                log(self, prop.toString(), {
                  args: argArray,
                });
                return Reflect.apply(target, thisArg, argArray);
              },
            });
          } else {
            log(this, prop.toString());
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
    return document.documentElement.hasAttribute("data-turbo-preview") || document.documentElement.hasAttribute("data-turbolinks-preview");
  }

  get isTurbolinksPreview(): boolean {
    return this.isTurboPreview;
  }

  get csrfToken(): string | null {
    return this.metaValue("csrf-token");
  }

  metaValue(name: string): string | null {
    const element = document.head.querySelector(`meta[name="${name}"]`);
    return element?.getAttribute("content") || null;
  }

  eventName(eventName: string) {
    return `${this.identifier}:${eventName}`;
  }

  dispatchEvent(element: HTMLElement, eventName: string, options: CustomEventInit = {}) {
    dispatchEvent(this, element, eventName, options);
  }

}
