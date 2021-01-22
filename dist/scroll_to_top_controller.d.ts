import { Controller } from "stimulus";
export declare class ScrollToTopController extends Controller {
    static values: {
        mode: StringConstructor;
    };
    modeValue: "nearest" | "document";
    hasModeValue: boolean;
    connect(): void;
    scroll(event?: Event): void;
}
//# sourceMappingURL=scroll_to_top_controller.d.ts.map