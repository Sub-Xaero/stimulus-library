import { BaseController } from "../utilities/base_controller";
export declare class IntersectionController extends BaseController {
    static values: {
        threshold: StringConstructor;
    };
    readonly isVisible: boolean;
    readonly thresholdValue: string;
    readonly hasThresholdValue: boolean;
    get threshold(): number[];
    connect(): void;
    appear(entry: IntersectionObserverEntry): void;
    disappear(entry: IntersectionObserverEntry): void;
}
//# sourceMappingURL=intersection_controller.d.ts.map