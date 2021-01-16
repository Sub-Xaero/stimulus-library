import {Controller} from "stimulus";

export class CharCountController extends Controller {

  static targets = ["input", "output"];
  static values = {min: Number, max: Number};
  static classes = ["error"];

  declare readonly inputTarget: HTMLInputElement | HTMLTextAreaElement;
  declare readonly outputTarget: HTMLElement;
  declare minValue: number;
  declare hasMinValue: boolean;
  declare maxValue: number;
  declare hasMaxValue: boolean;
  declare errorClass: string;
  declare hasErrorClass: boolean;

  boundHandler = this.updateCharCount.bind(this);

  connect() {
    this.updateCharCount();
    this.inputTarget.addEventListener("input", this.boundHandler);
  }

  disconnect() {
    this.inputTarget.removeEventListener("input", this.boundHandler);
  }

  updateCharCount() {
    let charCount = this.inputTarget.value.length;
    this.outputTarget.innerText = charCount.toString();
    if (this.hasErrorClass) {
      if (this.isValidCount(charCount)) {
        this.outputTarget.classList.remove(this.errorClass);
      } else {
        this.outputTarget.classList.add(this.errorClass);
      }
    }
  }

  isValidCount(count: number) {
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
