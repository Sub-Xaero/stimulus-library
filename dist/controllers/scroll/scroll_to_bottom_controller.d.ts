import { BaseController } from "../../utilities/base_controller";
export declare class ScrollToBottomController extends BaseController {
    static values: {
        mode: StringConstructor;
    };
    modeValue: "nearest" | "document";
    hasModeValue: boolean;
    scroll(event?: Event): void;
}
//# sourceMappingURL=scroll_to_bottom_controller.d.ts.map