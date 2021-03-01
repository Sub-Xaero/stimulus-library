import { BaseController } from "./base_controller";
export declare class StickyController extends BaseController {
    static classes: string[];
    static values: {
        mode: StringConstructor;
    };
    readonly hasStuckClass: boolean;
    readonly stuckClass: string;
    readonly hasModeValue: "top" | "bottom";
    readonly modeValue: "top" | "bottom";
    _magicElement: HTMLDivElement | null;
    get _mode(): "top" | "bottom";
    createMagicElement(): void;
    connect(): void;
}
//# sourceMappingURL=sticky_controller.d.ts.map