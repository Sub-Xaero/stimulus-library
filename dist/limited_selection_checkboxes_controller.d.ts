import { Controller } from "stimulus";
export declare class LimitedSelectionCheckboxesController extends Controller {
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
    maxSelections: number;
    boundHandleInputs: (event: Event) => void;
    connect(): void;
    disconnect(): void;
    handleInputs(event: Event): void;
}
//# sourceMappingURL=limited_selection_checkboxes_controller.d.ts.map