import { BaseController } from "./base_controller";
export declare class EnableInputsController extends BaseController {
    static targets: string[];
    static values: {
        clear: BooleanConstructor;
    };
    readonly hasEnablerTarget: boolean;
    readonly enablerTarget: HTMLInputElement;
    readonly enableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    readonly clearValue: boolean;
    readonly hasClearValue: boolean;
    connect(): void;
    toggle(): void;
    disableInputs(): void;
    enableInputs(): void;
}
//# sourceMappingURL=enable_inputs_controller.d.ts.map