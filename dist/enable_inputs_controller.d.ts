import { Controller } from "stimulus";
export declare class EnableInputsController extends Controller {
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