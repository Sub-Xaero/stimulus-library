import { Controller } from "stimulus";
export declare class DisableInputsController extends Controller {
    static targets: string[];
    readonly hasDisablerTarget: boolean;
    readonly disablerTarget: HTMLInputElement;
    readonly disableTargets: Array<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    connect(): void;
    toggle(): void;
    disableInputs(): void;
    enableInputs(): void;
}
//# sourceMappingURL=disable_inputs_controller.d.ts.map