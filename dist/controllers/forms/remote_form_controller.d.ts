import { BaseController } from "../../utilities/base_controller";
export declare class RemoteFormController extends BaseController {
    static targets: never[];
    static values: {
        selector: StringConstructor;
    };
    readonly hasSelectorValue: boolean;
    readonly selectorValue: string;
    get _selector(): string;
    replace(event: {
        detail: [Element, any, XMLHttpRequest];
    }): void;
}
//# sourceMappingURL=remote_form_controller.d.ts.map