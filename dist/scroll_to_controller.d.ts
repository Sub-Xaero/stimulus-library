import { Controller } from "stimulus";
export declare class ScrollToController extends Controller {
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
    connect(): void;
    scroll(): void;
}
//# sourceMappingURL=scroll_to_controller.d.ts.map