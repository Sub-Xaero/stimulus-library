import {BaseController} from "../../utilities/base_controller";
import {fetchRetry} from "../../utilities/fetchRetry";

export class LoadBlockController extends BaseController {

  static targets = ["replace"];
  static values = {
    endpoint: String,
    errorMessage: String,
    selector: String,
    maxRetries: Number,
  };

  declare maxRetriesValue: number;
  declare readonly hasMaxRetriesValue: boolean;

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

  get _maxRetries(): number {
    return this.hasMaxRetriesValue ? this.maxRetriesValue : 1;
  }

  connect() {
  }

  async loadContent(event: Event | null = null) {
    event?.preventDefault();

    let self = this;
    let el = this.hasReplaceTarget ? this.replaceTarget : this.el;

    let failure = () => {
      el.replaceWith(this._errorMessage);
      self.dispatchEvent(el, "ajax:error");
    };

    try {
      let response = await fetchRetry(this._maxRetries, this.endpointValue);
      if (!response.ok) {
        failure();
      }
      let text = await response.text();
      let newEl = document.createElement("div");

      newEl.innerHTML = text;
      if (this.hasSelectorValue) {
        let selectedContent = newEl.querySelectorAll(this.selectorValue);
        el.replaceWith(...selectedContent);
      } else {
        el.replaceWith(...newEl.children);
      }
      // Trigger event to show block has loaded
      self.dispatchEvent(el, "ajax:success");
    } catch (e) {
      failure();
    } finally {
      self.dispatchEvent(el, "ajax:complete");
    }
  }
}
