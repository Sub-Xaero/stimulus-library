import {BaseController} from "./base_controller";

export class TableSortController extends BaseController {

  static values = {startSort: Number};

  declare readonly startSortValue: number;
  declare readonly hasStartSortValue: boolean;
  _lastIndex: number | null = null;
  _reverse: boolean = false;

  get _tableHead(): HTMLTableSectionElement {
    let head = (this.el as HTMLTableElement).tHead;
    if (head == null) {
      throw new Error('Expected table to have a <thead> element.');
    }
    return head;
  }

  get _tableHeaders(): HTMLTableHeaderCellElement[] {
    let rows = this._tableHead.rows;
    if (rows.length == 0) {
      throw new Error('Expected table to have a <thead> element with at least one row.');
    }
    return Array.from(rows[0].cells);
  }

  get _tableBody() {
    return (this.el as HTMLTableElement).tBodies[0];
  }

  get _tableRows(): HTMLTableRowElement[] {
    return Array.from(this._tableBody.rows);
  }

  initialize() {
    this.sort = this.sort.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this._tableHeaders.forEach(cell => cell.addEventListener("click", this.sort));
      if (this.hasStartSortValue) {
        this._sortByColumn(this.startSortValue);
      }
    });
  }

  disconnect() {
    this._tableHeaders.forEach(cell => cell.removeEventListener("click", this.sort));
  }

  sort(event: Event) {
    event.preventDefault();
    let headerCell = event.target! as HTMLTableHeaderCellElement;
    let headerCellIndex = this._indexOfHeaderCell(headerCell);
    this._sortByColumn(headerCellIndex);
  }

  private _indexOfHeaderCell(cell: HTMLTableHeaderCellElement) {
    return this._tableHeaders.indexOf(cell);
  }

  private _sortByColumn(index: number) {
    this._reverse = index === this._lastIndex && !this._reverse;
    let frag = document.createDocumentFragment();
    let rows = this._tableRows;

    let newRows = rows.sort((row, otherRow) => {
      let cells = Array.from(row.cells);
      let otherCells = Array.from(otherRow.cells);

      // TODO: Handle colspans?
      let x = cells[index]?.innerText || "";
      let y = otherCells[index]?.innerText || "";

      let sortVal = x.localeCompare(y, "en", {sensitivity: "base", numeric: true, caseFirst: "upper"});

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