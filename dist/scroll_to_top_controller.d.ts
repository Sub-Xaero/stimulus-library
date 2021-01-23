import { BaseController } from "./base_controller";
export declare class ScrollToTopController extends BaseController {
    static values: {
        mode: StringConstructor;
    };
    modeValue: "nearest" | "document";
    hasModeValue: boolean;
    scroll(event?: Event): void;
}
//# sourceMappingURL=scroll_to_top_controller.d.ts.map