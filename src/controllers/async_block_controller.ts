import {BaseController} from "../utilities/base_controller";

export class AsyncBlockController extends BaseController {
  static targets = ["replace"];
  static values = {endpoint: String, errorMessage: String, selector: String};

  declare readonly replaceTarget: HTMLElement;
  declare readonly hasReplaceTarget: boolean;
  declare readonly endpointValue: string;

  declare readonly hasSelectorValue: boolean;
  declare readonly selectorValue: string;

  declare readonly hasErrorMessageValue: boolean;
  declare readonly errorMessageValue: string;

  get _errorMessage(): string {
    return this.hasErrorMessageValue ? this.errorMessageValue : "This content failed to load";
  }

  // This is a simple controller to load a block of content when the page loads.
  // It should be used to give a quick initial response before calling out to an
  // an AJAX endpoint to do some expensive work.
  connect() {
    this.loadContent();
  }

  loadContent() {
    let self = this;
    let el = this.hasReplaceTarget ? this.replaceTarget : this.el;
    fetch(this.endpointValue)
    .then((response) => response.text())
    .then((html) => {
      let newEl = document.createElement("div");
      newEl.innerHTML = html;
      if (this.hasSelectorValue) {
        let selectedContent = newEl.querySelectorAll(this.selectorValue);
        el.replaceWith(...selectedContent);
      } else {
        el.replaceWith(...newEl.children);
      }
      // Trigger event to show block has loaded
      self.dispatch(el, "ajax:success");
    })
    .catch(err => {
      el.replaceWith(this._errorMessage);
      self.dispatch(el, "ajax:error");
    })
    .finally(() => {
      self.dispatch(el, "ajax:complete");
    });
  }
}
