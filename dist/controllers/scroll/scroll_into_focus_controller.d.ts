import { EphemeralController } from "../../utilities/ephemeral_controller";
export declare class ScrollIntoFocusController extends EphemeralController {
    static values: {
        behavior: StringConstructor;
        block: StringConstructor;
        inline: StringConstructor;
    };
    behaviorValue: ScrollBehavior;
    hasBehaviorValue: boolean;
    blockValue: ScrollLogicalPosition;
    hasBlockValue: boolean;
    inlineValue: ScrollLogicalPosition;
    hasInlineValue: boolean;
    connect(): void;
}
//# sourceMappingURL=scroll_into_focus_controller.d.ts.map