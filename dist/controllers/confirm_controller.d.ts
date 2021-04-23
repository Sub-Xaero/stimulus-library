import { BaseController } from '../utilities/base_controller';
export declare class ConfirmController extends BaseController {
    static values: {
        message: StringConstructor;
    };
    readonly messageValue: string;
    readonly hasMessageValue: boolean;
    get _message(): string;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    confirm(event: Event): void;
}
//# sourceMappingURL=confirm_controller.d.ts.map