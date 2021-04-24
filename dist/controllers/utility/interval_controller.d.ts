import { BaseController } from "../../utilities/base_controller";
export declare class IntervalController extends BaseController {
    static values: {
        seconds: NumberConstructor;
    };
    readonly secondsValue: number;
    _intervalHandle: null | number;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    _interval(): void;
}
//# sourceMappingURL=interval_controller.d.ts.map