import { BaseController } from './base_controller';
export declare class ElementSaveController extends BaseController {
    static targets: string[];
    static values: {
        id: StringConstructor;
        attributes: StringConstructor;
        restoreOnLoad: BooleanConstructor;
    };
    readonly hasElementTarget: boolean;
    readonly elementTarget: HTMLElement;
    readonly elementTargets: HTMLElement[];
    readonly idValue: string;
    readonly attributesValue: string;
    readonly hasIdValue: boolean;
    readonly restoreOnLoadValue: boolean;
    readonly hasRestoreOnLoadValue: boolean;
    get _id(): string;
    get _uniqueIdentifier(): string;
    get _restoreOnLoad(): boolean;
    get _element(): HTMLElement;
    connect(): void;
    clear(event?: Event): void;
    save(event?: Event): void;
    restore(event?: Event): void;
}
//# sourceMappingURL=element_save_controller.d.ts.map