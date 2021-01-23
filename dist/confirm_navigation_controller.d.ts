import { BaseController } from "./base_controller";
export declare class ConfirmNavigationController extends BaseController {
    static values: {
        message: StringConstructor;
    };
    readonly messageValue: string;
    connect(): void;
    handlePopstate(event: PopStateEvent): boolean;
}
//# sourceMappingURL=confirm_navigation_controller.d.ts.map