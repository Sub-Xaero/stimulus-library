import { Controller } from "stimulus";
export declare class PasswordConfirmController extends Controller {
    static targets: string[];
    static classes: string[];
    readonly passwordTargets: HTMLInputElement[];
    readonly errorClass: string;
    readonly hasErrorClass: boolean;
    private boundCheckPasswordsMatch;
    connect(): void;
    disconnect(): void;
    private allPasswordsMatch;
    private checkPasswordsMatch;
}
//# sourceMappingURL=password_confirm_controller.d.ts.map