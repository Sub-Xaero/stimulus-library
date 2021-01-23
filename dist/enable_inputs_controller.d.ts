import { BaseController } from "./base_controller";
export declare class EnableInputsController extends BaseController {
    static targets: string[];
    readonly hasEnablerTarget: boolean;
    readonly enablerTarget: HTMLInputElement;
    readonly enableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    connect(): void;
    toggle(): void;
    disableInputs(): void;
    enableInputs(): void;
}
//# sourceMappingURL=enable_inputs_controller.d.ts.map