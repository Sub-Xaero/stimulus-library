import { Controller } from "stimulus";
export declare class EmptyDomController extends Controller {
    static classes: string[];
    static values: {
        scopeSelector: StringConstructor;
    };
    hasEmptyClass: boolean;
    emptyClass: string;
    hasScopeSelectorValue: boolean;
    scopeSelectorValue: string;
    connect(): void;
    mutate(entries: MutationRecord[]): void;
}
//# sourceMappingURL=empty_dom_controller.d.ts.map