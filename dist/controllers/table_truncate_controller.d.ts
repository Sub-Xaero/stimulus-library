import { BaseController } from "../utilities/base_controller";
export declare class TableTruncateController extends BaseController {
    static targets: string[];
    static values: {
        limit: NumberConstructor;
        truncated: BooleanConstructor;
    };
    readonly showMoreTarget: HTMLElement;
    limitValue: number;
    readonly hasLimitValue: boolean;
    truncatedValue: boolean;
    readonly hasTruncatedValue: boolean;
    get _truncated(): boolean;
    set _truncated(value: boolean);
    get _tableBody(): HTMLTableSectionElement;
    get _tableRows(): HTMLTableRowElement[];
    get _limit(): number;
    initialize(): void;
    connect(): void;
    truncate(event?: Event): void;
    expand(event?: Event): void;
    mutate(entries: MutationRecord[]): void;
    private _showElement;
    private _hideElement;
    private _reTruncate;
}
//# sourceMappingURL=table_truncate_controller.d.ts.map