import {PrintController} from "./utility/print_controller";

export class PrintButtonController extends PrintController {

  static classes = [
    'unsupported',
  ];
  declare readonly unsupportedClass: string;
  declare readonly hasUnsupportedClass: boolean;

  get _unsupportedClasses(): string[] {
    return this.unsupportedClass.split(' ');
  }

  get _defaultUnsupportedClasses(): string[] {
    return ["unsupported"];
  }

  initialize() {
    this.print = this.print.bind(this);
  }

  connect() {
    if (!("print" in window)) {
      this._addUnsupportedClasses(this.el);
    }
    this.el.addEventListener('click', this.print);
  }

  disconnect() {
    this.el.removeEventListener('click', this.print);
  }

  private _addUnsupportedClasses(el: HTMLElement = this.el) {
    if (this.hasUnsupportedClass) {
      el.classList.add(...this._unsupportedClasses);
    } else {
      el.classList.add(...this._defaultUnsupportedClasses);
    }
  }

  private _removeUnsupportedClasses(el: HTMLElement = this.el) {
    if (this.hasUnsupportedClass) {
      el.classList.remove(...this._unsupportedClasses);
    } else {
      el.classList.remove(...this._defaultUnsupportedClasses);
    }
  }

}
