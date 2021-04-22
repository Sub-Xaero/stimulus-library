import {useMutation} from "stimulus-use";
import {BaseController} from "../utilities/base_controller";

export class EmptyDomController extends BaseController {

  static classes = ["empty", "notEmpty"];
  static values = {scopeSelector: String};

  declare hasEmptyClass: boolean;
  declare emptyClass: string;
  declare hasNotEmptyClass: boolean;
  declare notEmptyClass: string;

  declare hasScopeSelectorValue: boolean;
  declare scopeSelectorValue: string;

  get emptyClasses(): string[] {
    return this.emptyClass.split(" ");
  }

  get notEmptyClasses(): string[] {
    return this.notEmptyClass.split(" ");
  }

  get children(): Element[] {
    let element = this.el;
    if (this.hasScopeSelectorValue) {
      return Array.from(element.querySelectorAll(this.scopeSelectorValue));
    } else {
      return Array.from(element.children);
    }
  }

  connect() {
    useMutation(this, {element: this.el, childList: true});
    this.checkEmpty();
  }

  mutate(entries: MutationRecord[]) {
    this.checkEmpty();
  }

  checkEmpty() {
    let element = this.el;
    let children = this.children;
    if (children.length === 0) {
      this._removeNotEmptyClasses();
      this._addEmptyClasses();
      this.dispatch(element as HTMLElement, "dom:empty");
    } else {
      this._addNotEmptyClasses();
      this._removeEmptyClasses();
      this.dispatch(element as HTMLElement, "dom:not-empty", {detail: {count: children.length}});
    }
  }

  private _removeEmptyClasses() {
    if (this.hasEmptyClass) {
      this.el.classList.remove(...this.emptyClasses);
    }
  }

  private _addNotEmptyClasses() {
    if (this.hasNotEmptyClass) {
      this.el.classList.add(...this.notEmptyClasses);
    }
  }

  private _addEmptyClasses() {
    if (this.hasEmptyClass) {
      this.el.classList.add(...this.emptyClasses);
    }
  }

  private _removeNotEmptyClasses() {
    if (this.hasNotEmptyClass) {
      this.el.classList.remove(...this.notEmptyClasses);
    }
  }
}
