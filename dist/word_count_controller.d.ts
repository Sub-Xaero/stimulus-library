import { BaseController } from "./base_controller";
export declare class WordCountController extends BaseController {
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
    initialize(): void;
    connect(): void;
    disconnect(): void;
    updateWordCount(): void;
    isValidCount(count: number): boolean;
}
//# sourceMappingURL=word_count_controller.d.ts.map