import { BaseController } from "./base_controller";
export declare class DetectDirtyController extends BaseController {
    loadValue: null | string | boolean;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    restore(): void;
    private checkDirty;
}
export declare function isDirty(element: HTMLElement): boolean;
//# sourceMappingURL=detect_dirty_controller.d.ts.map