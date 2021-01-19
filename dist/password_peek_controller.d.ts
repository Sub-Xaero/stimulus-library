import { Controller } from "stimulus";
export declare class PasswordPeekController extends Controller {
    static targets: string[];
    readonly passwordTarget: HTMLInputElement;
    connect(): void;
    peak(event?: Event): void;
    hide(event?: Event): void;
    toggle(event?: Event): void;
}
//# sourceMappingURL=password_peek_controller.d.ts.map