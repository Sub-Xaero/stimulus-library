import { BaseController } from "@stimulus-library/utilities";
import { useCollectionEventListener } from "@stimulus-library/mixins";

export class TableSortController extends BaseController {

  static values = { startSort: Number };

  declare readonly startSortValue: number;
  declare readonly hasStartSortValue: boolean;
  _lastIndex: number | null = null;
  _reverse: boolean = false;

  get _tableHead(): HTMLTableSectionElement {
    const head = (this.el as HTMLTableElement).tHead;
    if (head == null) {
      throw new Error("Expected table to have a <thead> element.");
    }
    return head;
  }

  get _tableHeaders(): HTMLTableHeaderCellElement[] {
    const rows = this._tableHead.rows;
    if (rows.length == 0) {
      throw new Error("Expected table to have a <thead> element with at least one row.");
    }
    return Array.from(rows[0].cells);
  }

  get _tableBody() {
    return (this.el as HTMLTableElement).tBodies[0];
  }

  get _tableRows(): HTMLTableRowElement[] {
    return Array.from(this._tableBody.rows);
  }

  connect() {
    requestAnimationFrame(() => {
      useCollectionEventListener(this, this._tableHeaders, "click", this.sort);
      if (this.hasStartSortValue) {
        this.sort(
          this._headerCellByIndex(this.startSortValue),
        );
      }
    });
  }

  sort(event_or_target: Event | HTMLTableHeaderCellElement) {
    let headerCell;
    if (event_or_target instanceof Event) {
      event_or_target.preventDefault();
      headerCell = event_or_target.target! as HTMLTableHeaderCellElement;
    } else {
      headerCell = event_or_target;
    }

    const headerCellIndex = this._indexOfHeaderCell(headerCell);
    if (headerCell.dataset.sortable == "false") {
      return;
    }
    if (headerCell.dataset.sort == "asc") {
      this._reverse = true;
      this._otherHeaderCells(headerCell).forEach(cell => delete cell.dataset.sort);
      headerCell.dataset.sort = "desc";
      this._sortByColumn(headerCellIndex);
    } else {
      this._reverse = false;
      this._otherHeaderCells(headerCell).forEach(cell => delete cell.dataset.sort);
      headerCell.dataset.sort = "asc";
      this._sortByColumn(headerCellIndex);
    }
  }

  private _indexOfHeaderCell(cell: HTMLTableHeaderCellElement): number {
    return this._tableHeaders.indexOf(cell);
  }

  private _headerCellByIndex(index: number): HTMLTableHeaderCellElement {
    const cell = this._tableHeaders.at(index);
    if (!cell) {
      throw new Error(`No cell at index ${index}`);
    }
    return cell;
  }

  private _otherHeaderCells(cell: HTMLTableHeaderCellElement): HTMLTableHeaderCellElement[] {
    return Array.from(this._tableHeaders).filter(otherCell => otherCell != cell);
  }

  private _sortByColumn(index: number) {
    const frag = document.createDocumentFragment();
    const rows = this._tableRows;

    const newRows = rows.sort((row, otherRow) => {
      const cells = Array.from(row.cells);
      const otherCells = Array.from(otherRow.cells);

      // TODO: Handle colspans?
      const x = cells[index]?.dataset?.sortValue || cells[index]?.innerText || "";
      const y = otherCells[index]?.dataset?.sortValue || otherCells[index]?.innerText || "";

      const sortVal = x.localeCompare(y, "en", { sensitivity: "base", numeric: true, caseFirst: "upper" });

      if (row.dataset.sortTop || otherRow.dataset.sortBottom) {
        if (row.dataset.sortTop && otherRow.dataset.sortTop) {
          return sortVal;
        }
        return -1;
      }
      if (row.dataset.sortBottom || otherRow.dataset.sortTop) {
        if (row.dataset.sortBottom && otherRow.dataset.sortBottom) {
          return sortVal;
        }
        return 1;
      }

      if (this._reverse) {
        return sortVal > 0 ? -1 : 1;
      }
      return sortVal;
    });

    newRows.forEach(row => frag.appendChild(row));

    this._tableBody.innerHTML = "";
    this._tableBody.appendChild(frag);
    this._lastIndex = index;
  }

}
