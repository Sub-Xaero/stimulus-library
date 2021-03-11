import { BaseController } from './base_controller';
export declare class ConfirmController extends BaseController {
    static values: {
        message: StringConstructor;
    };
    readonly messageValue: string;
    readonly hasMessageValue: boolean;
    get message(): string;
    initialize(): void;
    connect(): void;
    confirm(event: Event): void;
}
//# sourceMappingURL=confirm_controller.d.ts.map