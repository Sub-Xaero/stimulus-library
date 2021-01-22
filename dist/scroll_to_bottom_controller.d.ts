import { Controller } from "stimulus";
export declare class ScrollToBottomController extends Controller {
    static values: {
        mode: StringConstructor;
    };
    modeValue: "nearest" | "document";
    hasModeValue: boolean;
    connect(): void;
    scroll(event?: Event): void;
}
//# sourceMappingURL=scroll_to_bottom_controller.d.ts.map