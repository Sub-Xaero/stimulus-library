import { BaseController } from '../utilities/base_controller';
export declare class DisableWithController extends BaseController {
    static values: {
        message: StringConstructor;
        timeout: NumberConstructor;
    };
    readonly messageValue: string;
    readonly hasMessageValue: boolean;
    readonly timeoutValue: number;
    readonly hasTimeoutValue: boolean;
    _cacheText?: string;
    _timeoutHandle?: ReturnType<typeof window.setTimeout>;
    get _message(): string;
    get _timeout(): number;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    disable(event?: Event): void;
    enable(event?: Event): void;
    _isDisabled(el: HTMLElement): boolean;
    _getElText(el: HTMLElement): string;
    _setElText(el: HTMLElement, str: string): void;
    _disable(el: HTMLElement): void;
    _enable(el: HTMLElement): void;
}
//# sourceMappingURL=disable_with_controller.d.ts.map