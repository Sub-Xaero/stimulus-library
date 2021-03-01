import { BaseController } from "./base_controller";
export declare class SelfDestructController extends BaseController {
    static values: {
        seconds: NumberConstructor;
    };
    readonly secondsValue: number;
    timeout: null | ReturnType<typeof setTimeout>;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=self_destruct_controller.d.ts.map