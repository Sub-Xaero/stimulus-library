import { BaseController } from "../../utilities/base_controller";
export declare class TimeoutController extends BaseController {
    static values: {
        seconds: NumberConstructor;
    };
    readonly secondsValue: number;
    _timeoutHandle: null | number;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    _timeout(): void;
}
//# sourceMappingURL=timeout_controller.d.ts.map