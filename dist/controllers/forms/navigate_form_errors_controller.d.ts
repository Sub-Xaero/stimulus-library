import { BaseController } from "../../utilities/base_controller";
export declare class NavigateFormErrorsController extends BaseController {
    static values: {
        selector: StringConstructor;
        index: NumberConstructor;
    };
    static targets: string[];
    readonly hasNextTarget: boolean;
    readonly nextTarget: HTMLElement;
    readonly hasPreviousTarget: boolean;
    readonly previousTarget: HTMLElement;
    readonly hasCurrentTarget: boolean;
    readonly currentTarget: HTMLElement;
    selectorValue: string;
    readonly hasSelectorValue: boolean;
    indexValue: number;
    readonly hasIndexValue: boolean;
    _errors: HTMLElement[];
    get _errorCount(): number;
    get _previousIndex(): number | null;
    get _nextIndex(): number | null;
    get _index(): number;
    get _selector(): string;
    get _previousError(): HTMLElement | null;
    get _currentError(): HTMLElement;
    get _nextError(): HTMLElement | null;
    connect(): void;
    current(): Promise<void>;
    next(): Promise<void>;
    previous(): Promise<void>;
    indexValueChanged(): void;
    selectorValueChanged(): void;
    private _toggleButtons;
}
//# sourceMappingURL=navigate_form_errors_controller.d.ts.map