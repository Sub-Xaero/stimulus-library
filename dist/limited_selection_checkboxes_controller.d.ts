import { BaseController } from "./base_controller";
export declare class LimitedSelectionCheckboxesController extends BaseController {
    static targets: string[];
    static values: {
        max: NumberConstructor;
        message: StringConstructor;
    };
    readonly hasErrorTarget: boolean;
    readonly errorTarget: HTMLElement;
    readonly inputTargets: HTMLInputElement[];
    readonly maxValue: number;
    readonly messageValue: string;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    handleInputs(event: Event): void;
}
//# sourceMappingURL=limited_selection_checkboxes_controller.d.ts.map