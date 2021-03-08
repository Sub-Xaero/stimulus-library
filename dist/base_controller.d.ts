import { Context, Controller } from "stimulus";
export declare class BaseController extends Controller {
    constructor(context: Context);
    get el(): HTMLElement;
    dispatch(element: HTMLElement, eventName: string, options?: CustomEventInit): void;
    log(functionName: string, args?: {}): void;
}
//# sourceMappingURL=base_controller.d.ts.map