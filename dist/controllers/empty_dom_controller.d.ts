import { BaseController } from "../utilities/base_controller";
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
    get emptyClasses(): string[];
    get notEmptyClasses(): string[];
    get children(): Element[];
    connect(): void;
    mutate(entries: MutationRecord[]): void;
    checkEmpty(): void;
    private _removeEmptyClasses;
    private _addNotEmptyClasses;
    private _addEmptyClasses;
    private _removeNotEmptyClasses;
}
//# sourceMappingURL=empty_dom_controller.d.ts.map