import { BaseController } from "../../utilities/base_controller";
export declare class DetectDirtyController extends BaseController {
    get _cacheAttrName(): string;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    restore(event?: Event): void;
    private _getElementValue;
    private _getElementLoadValue;
    private _elementHasCachedLoadValue;
    private _checkDirty;
    private _isElementDirty;
    private _restoreElementFromLoadValue;
    private _cacheLoadValues;
}
export declare function isDirty(element: HTMLElement): boolean;
//# sourceMappingURL=detect_dirty_controller.d.ts.map