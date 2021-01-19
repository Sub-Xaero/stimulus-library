import { Controller } from "stimulus";
export declare class ConfirmNavigationController extends Controller {
    static values: {
        message: StringConstructor;
    };
    readonly messageValue: string;
    connect(): void;
    handlePopstate(event: PopStateEvent): boolean;
}
//# sourceMappingURL=confirm_navigation_controller.d.ts.map