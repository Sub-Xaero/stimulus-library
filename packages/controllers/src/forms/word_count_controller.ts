import { BaseController } from "@stimulus-library/utilities";
import { installClassMethods, useEventListener } from "@stimulus-library/mixins";

export class WordCountController extends BaseController {

  static targets = ["input", "output"];
  static values = { min: Number, max: Number };
  static classes = ["error"];

  declare readonly inputTarget: HTMLInputElement | HTMLTextAreaElement;
  declare readonly outputTarget: HTMLElement;
  declare minValue: number;
  declare hasMinValue: boolean;
  declare maxValue: number;
  declare hasMaxValue: boolean;

  declare addErrorClasses: (el?: HTMLElement) => void;
  declare removeErrorClasses: (el?: HTMLElement) => void;

  connect() {
    installClassMethods(this);
    this._updateWordCount();
    useEventListener(this, this.inputTarget, "input", this._updateWordCount);
  }

  _updateWordCount() {
    let wordCount = 0;
    const textAreaValue = this.inputTarget.value;
    const matches = textAreaValue.match(/\S+/g);
    wordCount = (matches && matches.length) || 0;
    this.outputTarget.innerText = wordCount.toString();
    if (this._isValidCount(wordCount)) {
      this.removeErrorClasses(this.outputTarget);
    } else {
      this.addErrorClasses(this.outputTarget);
    }
  }

  private _isValidCount(count: number) {
    let min = 0;
    let max = 99999;

    if (this.hasMinValue) {
      min = this.minValue;
    }

    if (this.hasMaxValue) {
      max = this.maxValue;
    }

    return count >= min && count <= max;
  }

}
