import { BaseController } from "../utilities/base_controller";
export declare class TableSortController extends BaseController {
    static values: {
        startSort: NumberConstructor;
    };
    readonly startSortValue: number;
    readonly hasStartSortValue: boolean;
    _lastIndex: number | null;
    _reverse: boolean;
    get _tableHead(): HTMLTableSectionElement;
    get _tableHeaders(): HTMLTableHeaderCellElement[];
    get _tableBody(): HTMLTableSectionElement;
    get _tableRows(): HTMLTableRowElement[];
    initialize(): void;
    connect(): void;
    disconnect(): void;
    sort(event: Event): void;
    private _indexOfHeaderCell;
    private _sortByColumn;
}
//# sourceMappingURL=table_sort_controller.d.ts.map