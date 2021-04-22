import { BaseController } from "../utilities/base_controller";
export declare class AsyncBlockController extends BaseController {
    static targets: string[];
    static values: {
        endpoint: StringConstructor;
        errorMessage: StringConstructor;
        selector: StringConstructor;
    };
    readonly replaceTarget: HTMLElement;
    readonly hasReplaceTarget: boolean;
    readonly endpointValue: string;
    readonly hasSelectorValue: boolean;
    readonly selectorValue: string;
    readonly hasErrorMessageValue: boolean;
    readonly errorMessageValue: string;
    get _errorMessage(): string;
    connect(): void;
    loadContent(): void;
}
//# sourceMappingURL=async_block_controller.d.ts.map