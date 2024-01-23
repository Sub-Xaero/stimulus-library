import { BaseController, clamp, scrollToElement } from "@stimulus-library/utilities";
import { installClassMethods } from "@stimulus-library/mixins";

export class NavigateFormErrorsController extends BaseController {
  static values = {
    selector: String,
    index: Number,
  };

  static classes = ["current"];
  static targets = ["next", "current", "previous"];

  declare readonly hasNextTarget: boolean;
  declare readonly nextTarget: HTMLElement;
  declare readonly hasPreviousTarget: boolean;
  declare readonly previousTarget: HTMLElement;
  declare readonly hasCurrentTarget: boolean;
  declare readonly currentTarget: HTMLElement;
  declare selectorValue: string;
  declare readonly hasSelectorValue: boolean;
  declare indexValue: number;
  declare readonly hasIndexValue: boolean;
  _errors: HTMLElement[] = [];
  _firstClick = false;

  declare addCurrentClasses: (el?: HTMLElement) => void;
  declare removeCurrentClasses: (el?: HTMLElement) => void;

  get defaultCurrentClasses(): string[] {
    return ["currentError"];
  }

  get _errorCount(): number {
    return this._errors.length;
  }

  get _previousIndex(): number {
    const index = this._index - 1;
    if (index < 0) {
      return 0;
    }
    return index;
  }

  get _nextIndex(): number {
    const index = this._index + 1;
    if (index > this._errors.length - 1) {
      return this._errors.length - 1;
    }
    return index;
  }

  get _index(): number {
    return clamp(this.hasIndexValue ? this.indexValue : 0, 0, this._errors.length);
  }

  get _selector(): string {
    if (this.hasSelectorValue) {
      return this.selectorValue;
    } else {
      throw new Error("Expected `selectorValue` to be present");
    }
  }

  get _currentError(): HTMLElement {
    return this._errors[this._index];
  }

  get _otherErrors(): HTMLElement[] {
    return this._errors.filter((error, index) => index !== this._index);
  }

  connect() {
    installClassMethods(this);
    requestAnimationFrame(() => {
        this._firstClick = true;
        this._toggleButtons();
        this._toggleVisibility();
      },
    );
  }

  async current(event?: Event) {
    event?.preventDefault();
    if (this._firstClick) {
      this._firstClick = false;
      this._toggleButtons();
    }
    await scrollToElement(this._currentError, { behavior: "smooth", block: "center", inline: "center" });
    this._updateClasses();
  }

  async next(event?: Event) {
    event?.preventDefault();
    if (this._firstClick) {
      this._firstClick = false;
      this._toggleButtons();
    } else {
      this.indexValue = this._nextIndex;
    }
    await scrollToElement(this._currentError, { behavior: "smooth", block: "center", inline: "center" });
    this._updateClasses();
  }

  async previous(event?: Event) {
    event?.preventDefault();
    if (this._firstClick) {
      this._firstClick = false;
      this._toggleButtons();
    } else {
      this.indexValue = this._previousIndex;
    }
    await scrollToElement(this._currentError, { behavior: "smooth", block: "center", inline: "center" });
    this._updateClasses();
  }

  indexValueChanged() {
    this._toggleButtons();
  }

  selectorValueChanged() {
    this._errors = Array.from(document.querySelectorAll(this._selector));
    this.indexValue = 0;
    this._toggleButtons();
    this._toggleVisibility();
  }

  private _updateClasses() {
    this.addCurrentClasses(this._currentError);
    this._otherErrors.forEach((error) => this.removeCurrentClasses(error));
  }

  private _toggleVisibility() {
    if (this._errorCount === 0) {
      this.el.style.display = "none";
    } else {
      this.el.style.display = "";
    }
  }

  private _toggleButtons() {
    if (this.hasNextTarget) {
      // If there is no "Current Error" button, then enable the next error button when there is only 1 error.
      if (!this.hasCurrentTarget && this._firstClick && this.indexValue == this._errorCount - 1) {
        this.nextTarget.removeAttribute("disabled");
        return;
      } else if (this.indexValue >= this._errorCount - 1) {
        this.nextTarget.setAttribute("disabled", "true");
      } else {
        this.nextTarget.removeAttribute("disabled");
      }
    }
    if (this.hasPreviousTarget) {
      if (this.indexValue <= 0) {
        this.previousTarget.setAttribute("disabled", "true");
      } else {
        this.previousTarget.removeAttribute("disabled");
      }
    }
  }

}
