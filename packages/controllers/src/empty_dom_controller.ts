import { installClassMethods, useMutationObserver } from "@stimulus-library/mixins";
import { BaseController } from "@stimulus-library/utilities";

export class EmptyDomController extends BaseController {

  static targets = ["container"];
  static classes = ["empty", "notEmpty"];
  static values = { scopeSelector: String };

  declare readonly hasContainerTarget: boolean;
  declare readonly containerTarget: HTMLElement;

  declare addEmptyClasses: (el?: HTMLElement) => void;
  declare removeEmptyClasses: (el?: HTMLElement) => void;
  declare addNotEmptyClasses: (el?: HTMLElement) => void;
  declare removeNotEmptyClasses: (el?: HTMLElement) => void;

  declare hasScopeSelectorValue: boolean;
  declare scopeSelectorValue: string;

  get _container() {
    return this.hasContainerTarget ? this.containerTarget : this.el;
  }

  get _children(): Element[] {
    const element = this._container;
    if (this.hasScopeSelectorValue) {
      return Array.from(element.querySelectorAll(this.scopeSelectorValue));
    } else {
      return Array.from(element.children);
    }
  }

  connect() {
    installClassMethods(this);
    useMutationObserver(this, this._container, this.mutate, { childList: true });
    this.checkEmpty();
  }

  mutate(_entries: MutationRecord[]) {
    this.checkEmpty();
  }

  checkEmpty() {
    const element = this._container;
    const children = this._children;
    if (children.length === 0) {
      this.removeNotEmptyClasses();
      this.addEmptyClasses();
      this.dispatchEvent(element as HTMLElement, this.eventName("empty"));
    } else {
      this.addNotEmptyClasses();
      this.removeEmptyClasses();
      this.dispatchEvent(element as HTMLElement, this.eventName("not-empty"), { detail: { count: children.length } });
    }
  }

}
