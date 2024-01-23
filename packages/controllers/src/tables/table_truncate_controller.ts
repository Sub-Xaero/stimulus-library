import { BaseController } from "@stimulus-library/utilities";
import { useEventListener, useMutationObserver } from "@stimulus-library/mixins";

export class TableTruncateController extends BaseController {

  static targets = ["showMore"];
  static values = {
    limit: Number,
    truncated: Boolean,
    expanded: Boolean,
  };

  declare readonly showMoreTarget: HTMLElement;
  declare limitValue: number;
  declare readonly hasLimitValue: boolean;
  declare truncatedValue: boolean;
  declare readonly hasTruncatedValue: boolean;
  declare expandedValue: boolean;
  declare readonly hasExpandedValue: boolean;

  get _truncated(): boolean {
    return this.hasTruncatedValue ? this.truncatedValue : false;
  }

  set _truncated(value) {
    this.truncatedValue = value;
  }

  get _expanded(): boolean {
    return this.hasExpandedValue ? this.expandedValue : false;
  }

  set _expanded(value) {
    this.expandedValue = value;
  }

  get _tableBody(): HTMLTableSectionElement {
    return (this.el as HTMLTableElement).tBodies[0];
  }

  get _tableRows(): HTMLTableRowElement[] {
    return Array.from(this._tableBody.rows);
  }

  get _limit(): number {
    return this.hasLimitValue ? this.limitValue : 20;
  }

  connect() {
    useMutationObserver(this, this._tableBody, this.mutate, { childList: true });

    requestAnimationFrame(() => {
      this.truncate();
      useEventListener(this, this.showMoreTarget, "click", this.expand);
    });
  }

  truncate(event?: Event) {
    event?.preventDefault();
    if (this._tableRows.length >= this._limit) {
      this._truncated = true;
      this._tableRows.slice(this._limit).forEach((el) => {
        if (el !== this.showMoreTarget) {
          this._hideElement(el);
        }
      });
      this._showElement(this.showMoreTarget);
    } else {
      this._truncated = false;
      this._hideElement(this.showMoreTarget);
    }
  }

  expand(event?: Event) {
    this._expanded = true;
    event?.preventDefault();
    this._tableRows.slice(this._limit).forEach((el) => {
      if (el !== this.showMoreTarget) {
        this._showElement(el);
      }
    });
    this._hideElement(this.showMoreTarget);
  }

  mutate(_entries: MutationRecord[]) {
    if (this._tableRows.length >= this._limit && !this._expanded) {
      this._reTruncate();
    }
  }

  private _showElement(el: HTMLElement): void {
    el.style.display = "";
  }

  private _hideElement(el: HTMLElement): void {
    el.style.display = "none";
  }

  private _reTruncate() {
    this._tableRows.slice(0, this._limit).forEach((el) => {
      if (el !== this.showMoreTarget) {
        this._showElement(el);
      }
    });
    this._tableRows.slice(this._limit).forEach((el) => {
      if (el !== this.showMoreTarget) {
        this._hideElement(el);
      }
    });
    this._showElement(this.showMoreTarget);
  }

}
