import {useMutation} from "stimulus-use";
import {BaseController} from "../../utilities/base_controller";
import {useEventListener} from "../../mixins/use_event_listener";

export class TableTruncateController extends BaseController {

  static targets = ["showMore"];
  static values = {
    limit: Number,
    truncated: Boolean,
  };

  declare readonly showMoreTarget: HTMLElement;
  declare limitValue: number;
  declare readonly hasLimitValue: boolean;
  declare truncatedValue: boolean;
  declare readonly hasTruncatedValue: boolean;

  get _truncated(): boolean {
    return this.hasTruncatedValue ? this.truncatedValue : false;
  }

  set _truncated(value) {
    this.truncatedValue = value;
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
    useMutation(this, {childList: true, element: this._tableBody});

    requestAnimationFrame(() => {
      this.truncate();
      useEventListener(this, this.showMoreTarget, "click", this.expand);
    });
  }

  truncate(event?: Event) {
    event?.preventDefault();
    this._truncated = true;
    if (this._tableRows.length >= this._limit) {
      this._tableRows.slice(this._limit).forEach((el) => {
        if (el !== this.showMoreTarget) {
          this._hideElement(el);
        }
      });
      this._showElement(this.showMoreTarget);
    } else {
      this._hideElement(this.showMoreTarget);
    }
  }

  expand(event?: Event) {
    this._truncated = false;
    event?.preventDefault();
    this._tableRows.slice(this._limit).forEach((el) => {
      if (el !== this.showMoreTarget) {
        this._showElement(el);
      }
    });
    this._hideElement(this.showMoreTarget);
  }

  mutate(entries: MutationRecord[]) {
    if (this._truncated) {
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