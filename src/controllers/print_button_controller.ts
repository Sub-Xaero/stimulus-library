import {PrintController} from "./utility/print_controller";
import {useEventListener} from "../mixins/use_event_listener";

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

  connect() {
    if (!("print" in window)) {
      this._addUnsupportedClasses(this.el);
    }
    useEventListener(this, this.el, 'click', this.print);
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
