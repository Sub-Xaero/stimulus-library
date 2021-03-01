import { BaseController } from "./base_controller";
export declare class PasswordConfirmController extends BaseController {
    static targets: string[];
    static classes: string[];
    readonly passwordTargets: HTMLInputElement[];
    readonly errorClass: string;
    readonly hasErrorClass: boolean;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    private allPasswordsMatch;
    private checkPasswordsMatch;
}
//# sourceMappingURL=password_confirm_controller.d.ts.map