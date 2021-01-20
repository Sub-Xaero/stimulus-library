import {Controller} from "stimulus";
import {useMutation} from "stimulus-use";

export class EmptyDomController extends Controller {

  static classes = ["empty", "notEmpty"];
  static values = {scopeSelector: String};

  declare hasEmptyClass: boolean;
  declare emptyClass: string;
  declare hasNotEmptyClass: boolean;
  declare notEmptyClass: string;

  declare hasScopeSelectorValue: boolean;
  declare scopeSelectorValue: string;

  connect() {
    useMutation(this, {element: this.element, childList: true});
  }

  mutate(entries: MutationRecord[]) {
    let children;
    if (this.hasScopeSelectorValue) {
      children = this.element.querySelectorAll(this.scopeSelectorValue);
    } else {
      children = this.element.children;
    }

    if (children.length === 0) {
      if (this.hasNotEmptyClass) {
        let classes = this.notEmptyClass.split(" ");
        classes.forEach(klass => this.element.classList.remove(klass));
      }
      if (this.hasEmptyClass) {
        let classes = this.emptyClass.split(" ");
        classes.forEach(klass => this.element.classList.add(klass));
      }
      this.element.dispatchEvent(new CustomEvent("dom:empty", {bubbles: true, cancelable: true}));
    } else {
      if (this.hasNotEmptyClass) {
        let classes = this.notEmptyClass.split(" ");
        classes.forEach(klass => this.element.classList.add(klass));
      }
      if (this.hasEmptyClass) {
        let classes = this.emptyClass.split(" ");
        classes.forEach(klass => this.element.classList.remove(klass));
      }
      this.element.dispatchEvent(new CustomEvent("dom:not-empty", {bubbles: true, cancelable: true}));
    }
  }

}
