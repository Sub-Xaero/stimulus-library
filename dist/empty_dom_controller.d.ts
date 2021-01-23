import { BaseController } from "./base_controller";
export declare class EmptyDomController extends BaseController {
    static classes: string[];
    static values: {
        scopeSelector: StringConstructor;
    };
    hasEmptyClass: boolean;
    emptyClass: string;
    hasNotEmptyClass: boolean;
    notEmptyClass: string;
    hasScopeSelectorValue: boolean;
    scopeSelectorValue: string;
    connect(): void;
    mutate(entries: MutationRecord[]): void;
    checkEmpty(): void;
}
//# sourceMappingURL=empty_dom_controller.d.ts.map