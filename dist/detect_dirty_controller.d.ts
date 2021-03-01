import { BaseController } from "./base_controller";
export declare class DetectDirtyController extends BaseController {
    initialValue: string | boolean | null;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    restore(): void;
    private checkDirty;
}
export declare function isDirty(element: HTMLElement): boolean;
//# sourceMappingURL=detect_dirty_controller.d.ts.map