import {BaseController} from "./base_controller";

export class WordCountController extends BaseController {

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

  initialize() {
    this.updateWordCount = this.updateWordCount.bind(this);
  }

  connect() {
    this.updateWordCount();
    this.inputTarget.addEventListener("input", this.updateWordCount);
  }

  disconnect() {
    this.inputTarget.removeEventListener("input", this.updateWordCount);
  }

  updateWordCount() {
    let wordCount = 0;
    let textAreaValue = this.inputTarget.value;
    let matches = textAreaValue.match(/\S+/g);
    wordCount = (matches && matches.length) || 0;
    this.outputTarget.innerText = wordCount.toString();
    if (this.hasErrorClass) {
      if (this.isValidCount(wordCount)) {
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
