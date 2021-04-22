import { BaseController } from "./base_controller";
export declare class AnchorSpyController extends BaseController {
    static values: {
        key: StringConstructor;
    };
    readonly keyValue: string;
    get key(): string;
    get anchor(): string;
    set anchor(value: string);
    initialize(): void;
    connect(): void;
    disconnect(): void;
    write(event?: Event): void;
    private _checkAnchor;
}
//# sourceMappingURL=anchor_spy_controller.d.ts.map