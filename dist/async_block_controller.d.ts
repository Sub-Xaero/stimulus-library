import { Controller } from "stimulus";
export declare class AsyncBlockController extends Controller {
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