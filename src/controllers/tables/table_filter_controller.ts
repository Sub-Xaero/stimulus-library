import {BaseController} from "../../utilities/base_controller";
import {useMutationObserver} from "../../mixins/use_mutation_observer";

export class TableFilterController extends BaseController {

  static values = {
    search: String,
  };

  declare searchValue: string;
  declare readonly hasSearchValue: boolean;


  get _tableBody(): HTMLTableSectionElement {
    return (this.el as HTMLTableElement).tBodies[0];
  }

  get _tableRows(): HTMLTableRowElement[] {
    return Array.from(this._tableBody.rows);
  }

  connect() {
    useMutationObserver(this, this._tableBody, this.mutate, {childList: true});

    requestAnimationFrame(() => {
      this.filter();
    });
  }

  filter(event?: Event) {
    event?.preventDefault();

    if (this.searchValue == "") {
      this._tableRows.forEach((row) => this._showElement(row));
      return;
    }

    let filter = this.searchValue.toLocaleUpperCase();

    this._tableRows.forEach((row) => {
      this.columns(row).forEach((col) => {
        let text = col.textContent || col.innerText;
        if (text.includes(filter)) {
          this._showElement(row);
        } else {
          this._hideElement(row);
        }
      });
    });
  }

  clear() {
    this.searchValue = "";
  }

  columns(row: HTMLTableRowElement) {
    return Array.from(row.cells);
  }

  mutate(entries: MutationRecord[]) {
    this.filter();
  }

  private _showElement(el: HTMLElement): void {
    el.style.display = "";
  }

  private _hideElement(el: HTMLElement): void {
    el.style.display = "none";
  }

}
