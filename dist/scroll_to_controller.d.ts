import { BaseController } from "./base_controller";
export declare class ScrollToController extends BaseController {
    static values: {
        selector: StringConstructor;
        behavior: StringConstructor;
        block: StringConstructor;
        inline: StringConstructor;
    };
    selectorValue: string;
    behaviorValue: ScrollBehavior;
    hasBehaviorValue: boolean;
    blockValue: ScrollLogicalPosition;
    hasBlockValue: boolean;
    inlineValue: ScrollLogicalPosition;
    hasInlineValue: boolean;
    scroll(): void;
}
//# sourceMappingURL=scroll_to_controller.d.ts.map