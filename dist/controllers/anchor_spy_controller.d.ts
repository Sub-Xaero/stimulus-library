import { BaseController } from "../utilities/base_controller";
export declare class AnchorSpyController extends BaseController {
    static values: {
        key: StringConstructor;
    };
    readonly keyValue: string;
    get _key(): string;
    get _anchor(): string;
    set _anchor(value: string);
    initialize(): void;
    connect(): void;
    disconnect(): void;
    write(event?: Event): void;
    private _checkAnchor;
}
//# sourceMappingURL=anchor_spy_controller.d.ts.map