import { BaseController } from './base_controller';
export declare class CheckboxSelectAllController extends BaseController {
    static targets: string[];
    readonly hasSelectAllTarget: boolean;
    readonly selectAllTarget: HTMLInputElement;
    readonly checkboxTargets: HTMLInputElement[];
    private get checked();
    private get unchecked();
    initialize(): void;
    connect(): void;
    disconnect(): void;
    private toggle;
    private refresh;
}
//# sourceMappingURL=checkbox_select_all_controller.d.ts.map