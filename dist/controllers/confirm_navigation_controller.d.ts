import { BaseController } from "../utilities/base_controller";
export declare class ConfirmNavigationController extends BaseController {
    static values: {
        _message: StringConstructor;
    };
    readonly _messageValue: string;
    readonly hasMessageValue: boolean;
    get _message(): string;
    initialize(): void;
    connect(): void;
    handlePopstate(_event: PopStateEvent): boolean;
    handleTurboNavigation(event: Event): void;
}
//# sourceMappingURL=confirm_navigation_controller.d.ts.map