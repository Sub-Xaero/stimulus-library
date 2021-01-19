import { IntersectionOptions } from "stimulus-use/dist/use-intersection/use-intersection";
import { AsyncBlockController } from "./async_block_controller";
export declare class LazyBlockController extends AsyncBlockController {
    observe: () => void;
    unobserve: () => void;
    options: IntersectionOptions;
    isVisible: boolean;
    disappear: () => void;
    connect(): void;
    appear(entry: IntersectionObserverEntry): void;
}
//# sourceMappingURL=lazy_block_controller.d.ts.map