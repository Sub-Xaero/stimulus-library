import { BaseController } from "../utilities/base_controller";
export declare class SelfDestructController extends BaseController {
    static values: {
        seconds: NumberConstructor;
    };
    readonly secondsValue: number;
    _timeout: null | ReturnType<typeof window.setTimeout>;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=self_destruct_controller.d.ts.map