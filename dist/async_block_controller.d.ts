import { BaseController } from "./base_controller";
export declare class AsyncBlockController extends BaseController {
    static targets: string[];
    static values: {
        endpoint: StringConstructor;
    };
    readonly replaceTarget: HTMLElement;
    readonly hasReplaceTarget: boolean;
    readonly endpointValue: string;
    connect(): void;
    loadContent(): void;
}
//# sourceMappingURL=async_block_controller.d.ts.map