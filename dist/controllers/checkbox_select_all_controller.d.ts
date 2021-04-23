import { BaseController } from '../utilities/base_controller';
export declare class CheckboxSelectAllController extends BaseController {
    static targets: string[];
    readonly hasSelectAllTarget: boolean;
    readonly selectAllTarget: HTMLInputElement;
    readonly checkboxTargets: HTMLInputElement[];
    private get _checked();
    private get _unchecked();
    initialize(): void;
    connect(): void;
    disconnect(): void;
    private _toggle;
    private _refresh;
}
//# sourceMappingURL=checkbox_select_all_controller.d.ts.map