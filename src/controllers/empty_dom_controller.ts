import {useMutationObserver} from "../mixins/use_mutation_observer";
import {BaseController} from "../utilities/base_controller";
import {installClassMethods} from "../mixins/install_class_methods";

export class EmptyDomController extends BaseController {

  static targets = ["container"];
  static classes = ["empty", "notEmpty"];
  static values = {scopeSelector: String};

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
    let element = this._container;
    if (this.hasScopeSelectorValue) {
      return Array.from(element.querySelectorAll(this.scopeSelectorValue));
    } else {
      return Array.from(element.children);
    }
  }

  connect() {
    installClassMethods(this);
    useMutationObserver(this, this._container, this.mutate, {childList: true});
    this.checkEmpty();
  }

  mutate(entries: MutationRecord[]) {
    this.checkEmpty();
  }

  checkEmpty() {
    let element = this._container;
    let children = this._children;
    if (children.length === 0) {
      this.removeNotEmptyClasses();
      this.addEmptyClasses();
      this.dispatchEvent(element as HTMLElement, this.eventName("empty"));
    } else {
      this.addNotEmptyClasses();
      this.removeEmptyClasses();
      this.dispatchEvent(element as HTMLElement, this.eventName("not-empty"), {detail: {count: children.length}});
    }
  }

}
