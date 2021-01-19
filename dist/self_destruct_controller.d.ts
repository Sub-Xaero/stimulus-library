import { Controller } from "stimulus";
export declare class SelfDestructController extends Controller {
    static values: {
        seconds: NumberConstructor;
    };
    readonly secondsValue: number;
    timeout: null | ReturnType<typeof setTimeout>;
    connect(): void;
    disconnect(): void;
}
//# sourceMappingURL=self_destruct_controller.d.ts.map