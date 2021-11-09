import {Context, Controller} from "stimulus";
import {log, logProperty} from "./logging";

export class BaseController extends Controller {

  constructor(context: Context) {
    super(context);
    // @ts-ignore
    if (!this.application.debug) {
      return this;
    }
    return new Proxy(this, {
      get: (obj, prop) => {
        let returnVal = Reflect.get(obj, prop);
        let self = this;
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

  dispatchEvent(element: HTMLElement, eventName: string, options: CustomEventInit = {}) {
    this.dispatchEvent(element, eventName, options);
  }

}
