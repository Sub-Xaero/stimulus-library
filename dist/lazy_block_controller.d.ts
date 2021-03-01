import { AsyncBlockController } from "./async_block_controller";
export declare class LazyBlockController extends AsyncBlockController {
    observe: () => void;
    unobserve: () => void;
    isVisible: boolean;
    disappear: () => void;
    connect(): void;
    appear(entry: IntersectionObserverEntry): void;
}
//# sourceMappingURL=lazy_block_controller.d.ts.map