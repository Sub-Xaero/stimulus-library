import { Controller } from "stimulus";
export declare class TeleportController extends Controller {
    static values: {
        target: StringConstructor;
        insert: StringConstructor;
    };
    readonly targetValue: string;
    readonly insertValue: InsertPosition | "replaceOuter" | "replaceInner" | "prepend" | "append";
    connect(): void;
}
//# sourceMappingURL=teleport_controller.d.ts.map