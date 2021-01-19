import { Controller } from "stimulus";
export declare class CharCountController extends Controller {
    static targets: string[];
    static values: {
        min: NumberConstructor;
        max: NumberConstructor;
    };
    static classes: string[];
    readonly inputTarget: HTMLInputElement | HTMLTextAreaElement;
    readonly outputTarget: HTMLElement;
    minValue: number;
    hasMinValue: boolean;
    maxValue: number;
    hasMaxValue: boolean;
    errorClass: string;
    hasErrorClass: boolean;
    boundHandler: () => void;
    connect(): void;
    disconnect(): void;
    updateCharCount(): void;
    isValidCount(count: number): boolean;
}
//# sourceMappingURL=char_count_controller.d.ts.map