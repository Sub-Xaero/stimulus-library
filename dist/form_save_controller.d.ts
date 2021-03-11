import { BaseController } from './base_controller';
interface FormSavePayload {
    [idx: string]: {
        [idx: string]: string | boolean;
    };
}
export declare class FormSaveController extends BaseController {
    static values: {
        id: StringConstructor;
        restoreOnLoad: BooleanConstructor;
        clearOnSubmit: BooleanConstructor;
    };
    readonly idValue: string;
    readonly hasIdValue: boolean;
    readonly restoreOnLoadValue: boolean;
    readonly hasRestoreOnLoadValue: boolean;
    readonly clearOnSubmitValue: boolean;
    readonly hasClearOnSubmitValue: boolean;
    get formID(): string;
    get formIdentifier(): string;
    get formElements(): HTMLFormControlsCollection;
    get formData(): FormSavePayload;
    get restoreOnLoad(): boolean;
    get clearOnSubmit(): boolean;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    _clear(): void;
    clear(event?: Event): void;
    save(event: Event): void;
    restore(event?: Event): void;
}
export {};
//# sourceMappingURL=form_save_controller.d.ts.map