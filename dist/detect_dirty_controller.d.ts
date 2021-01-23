import { BaseController } from "./base_controller";
export declare class DetectDirtyController extends BaseController {
    initialValue: string | boolean | null;
    boundHandler: (event?: Event | undefined) => void;
    connect(): void;
    disconnect(): void;
    restore(): void;
    private handler;
    private isCheckable;
    private isInputElement;
}
export declare function isDirty(element: HTMLElement): boolean;
//# sourceMappingURL=detect_dirty_controller.d.ts.map