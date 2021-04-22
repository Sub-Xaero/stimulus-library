import { BaseController } from "../utilities/base_controller";
export declare class ClipboardController extends BaseController {
    static targets: string[];
    static values: {
        removeUnused: BooleanConstructor;
    };
    readonly sourceTarget: HTMLElement;
    readonly copyTarget: HTMLElement;
    readonly hasCopyTarget: boolean;
    readonly fallbackTarget: HTMLElement;
    readonly hasFallbackTarget: boolean;
    readonly hasRemoveUnusedValue: boolean;
    readonly removeUnusedValue: boolean;
    supported: boolean;
    connect(): void;
    select(event: MouseEvent): void;
    copy(event: ClipboardEvent): void;
}
//# sourceMappingURL=clipboard_controller.d.ts.map