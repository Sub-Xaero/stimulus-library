import {Controller} from "stimulus";
import {useMutation} from "stimulus-use";

export class EmptyDomController extends Controller {

  static classes = ["empty"];
  static values = {scopeSelector: String};

  declare hasEmptyClass: boolean;
  declare emptyClass: string;

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
      if (this.hasEmptyClass) {
        this.element.classList.add(this.emptyClass);
      }
      this.element.dispatchEvent(new CustomEvent("dom:empty", {bubbles: true, cancelable: true}));
    } else {
      if (this.hasEmptyClass) {
        this.element.classList.remove(this.emptyClass);
      }
      this.element.dispatchEvent(new CustomEvent("dom:not-empty", {bubbles: true, cancelable: true}));
    }
  }

}
