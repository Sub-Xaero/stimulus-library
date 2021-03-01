import { BaseController } from "./base_controller";
export declare class NestedFormController extends BaseController {
    static targets: string[];
    static values: {
        insertMode: StringConstructor;
        wrapperClass: StringConstructor;
    };
    readonly targetTarget: HTMLElement;
    readonly templateTarget: HTMLTemplateElement | HTMLScriptElement;
    readonly wrapperClassValue: string;
    readonly hasWrapperSelectorValue: boolean;
    readonly insertModeValue: InsertPosition;
    readonly hasInsertModeValue: boolean;
    get wrapperClass(): string;
    get insertMode(): InsertPosition;
    connect(): void;
    add(event?: Event): void;
    remove(event: Event): void;
    generateID(): string;
    private checkStructure;
}
//# sourceMappingURL=nested_form_controller.d.ts.map