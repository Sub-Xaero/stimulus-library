import { BaseController } from "../utilities/base_controller";
export declare class DetectDirtyFormController extends BaseController {
    get _formElements(): Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    get _cacheAttrName(): string;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    restore(event?: Event): void;
    private _getElementValue;
    private _getElementLoadValue;
    private _elementHasCachedLoadValue;
    private _checkElementDirty;
    private _isElementDirty;
    private _cacheElementLoadValue;
    private _restoreElementFromLoadValue;
    private _cacheLoadValues;
    private _checkDirty;
}
export declare function isDirty(element: HTMLElement): boolean;
//# sourceMappingURL=detect_dirty_form_controller.d.ts.map