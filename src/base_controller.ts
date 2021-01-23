import {Context, Controller} from "stimulus";

export class BaseController extends Controller {


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
