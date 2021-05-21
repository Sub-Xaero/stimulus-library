import {BaseController} from "../../utilities/base_controller";
import {scrollToElement} from "../../utilities/scroll";
import {clamp} from "lodash-es";

export class NavigateFormErrorsController extends BaseController {
  static values = {
    selector: String,
    index: Number,
  };

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

  get _errorCount(): number {
    return this._errors.length;
  }

  get _previousIndex(): number | null {
    let index = this._index - 1;
    if (index < 0) {
      return null;
    }
    return index;
  }

  get _nextIndex(): number | null {
    let index = this._index + 1;
    if (index > this._errors.length - 1) {
      return null;
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

  get _previousError(): HTMLElement | null {
    return this._previousIndex ? this._errors[this._previousIndex] : null;
  }

  get _currentError(): HTMLElement {
    return this._errors[this._index];
  }

  get _nextError(): HTMLElement | null {
    return this._nextIndex ? this._errors[this._nextIndex] : null;
  }

  connect() {
    if (!this.hasIndexValue) {
      this.indexValue = -1;
    }
    this._toggleButtons();

    if (this._errorCount === 0) {
      this.el.style.display = "none";
    } else {
      this.el.style.display = "";
    }
  }

  async current() {
    await scrollToElement(this._currentError);
  }

  async next() {
    if (this._nextError) {
      await scrollToElement(this._nextError);
    }
    if (this._index < this._errorCount - 1) {
      this.indexValue += 1;
    }
  }

  async previous() {
    if (this._previousError) {
      await scrollToElement(this._previousError);
    }
    if (this._index > 0) {
      this.indexValue -= 1;
    }
  }

  indexValueChanged() {
    this._toggleButtons();
  }

  selectorValueChanged() {
    this._errors = Array.from(document.querySelectorAll(this._selector));
  }

  private _toggleButtons() {
    if (this.hasNextTarget) {
      if (this.indexValue >= this._errorCount - 1) {
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
