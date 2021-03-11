import { BaseController } from "./base_controller";
export declare class DisableInputsController extends BaseController {
    static targets: string[];
    static values: {
        clear: BooleanConstructor;
    };
    readonly hasDisablerTarget: boolean;
    readonly disablerTarget: HTMLInputElement;
    readonly disableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    readonly clearValue: boolean;
    readonly hasClearValue: boolean;
    connect(): void;
    toggle(): void;
    disableInputs(): void;
    enableInputs(): void;
}
//# sourceMappingURL=disable_inputs_controller.d.ts.map