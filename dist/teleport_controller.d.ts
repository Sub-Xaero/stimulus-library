import { EphemeralController } from "./utilities/ephemeral_controller";
export declare class TeleportController extends EphemeralController {
    static values: {
        target: StringConstructor;
        insert: StringConstructor;
        immediate: BooleanConstructor;
    };
    readonly immediateValue: boolean;
    readonly hasImmediateValue: boolean;
    readonly targetValue: string;
    readonly hasInsertValue: boolean;
    readonly insertValue: InsertPosition | "replaceOuter" | "replaceInner" | "prepend" | "append";
    connect(): void;
    execute(event?: Event): void;
}
//# sourceMappingURL=teleport_controller.d.ts.map