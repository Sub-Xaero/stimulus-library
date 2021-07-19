import {useMutation} from "stimulus-use";
import {BaseController} from "../utilities/base_controller";

export class EmptyDomController extends BaseController {

  static targets = ["container"];
  static classes = ["empty", "notEmpty"];
  static values = {scopeSelector: String};

  declare readonly hasContainerTarget: boolean;
  declare readonly containerTarget: HTMLElement;

  declare readonly emptyClass: string;
  declare readonly hasEmptyClass: boolean;
  declare readonly notEmptyClass: string;
  declare readonly hasNotEmptyClass: boolean;

  declare hasScopeSelectorValue: boolean;
  declare scopeSelectorValue: string;

  get _container() {
    return this.hasContainerTarget ? this.containerTarget : this.el;
  }

  get _notEmptyClasses(): string[] {
    return this.notEmptyClass.split(' ');
  }

  get _defaultNotEmptyClasses(): string[] {
    return [];
  }

  get _emptyClasses(): string[] {
    return this.emptyClass.split(' ');
  }

  get _defaultEmptyClasses(): string[] {
    return [];
  }

  get _children(): Element[] {
    let element = this._container;
    if (this.hasScopeSelectorValue) {
      return Array.from(element.querySelectorAll(this.scopeSelectorValue));
    } else {
      return Array.from(element.children);
    }
  }

  connect() {
    useMutation(this, {element: this._container, childList: true});
    this.checkEmpty();
  }

  mutate(entries: MutationRecord[]) {
    this.checkEmpty();
  }

  checkEmpty() {
    let element = this._container;
    let children = this._children;
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

  private _addNotEmptyClasses(el: HTMLElement = this.el) {
    if (this.hasNotEmptyClass) {
      el.classList.add(...this._notEmptyClasses);
    } else {
      el.classList.add(...this._defaultNotEmptyClasses);
    }
  }

  private _removeNotEmptyClasses(el: HTMLElement = this.el) {
    if (this.hasNotEmptyClass) {
      el.classList.remove(...this._notEmptyClasses);
    } else {
      el.classList.remove(...this._defaultNotEmptyClasses);
    }
  }

  private _addEmptyClasses(el: HTMLElement = this.el) {
    if (this.hasEmptyClass) {
      el.classList.add(...this._emptyClasses);
    } else {
      el.classList.add(...this._defaultEmptyClasses);
    }
  }

  private _removeEmptyClasses(el: HTMLElement = this.el) {
    if (this.hasEmptyClass) {
      el.classList.remove(...this._emptyClasses);
    } else {
      el.classList.remove(...this._defaultEmptyClasses);
    }
  }

}
