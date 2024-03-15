import { BaseController, requestSubmit } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

export class AutoSubmitFormController extends BaseController {

  static values = { submitMode: String, eventMode: String, debounceInterval: Number };
  declare readonly submitModeValue: "direct" | "request";
  declare readonly hasSubmitModeValue: boolean;
  declare eventModeValue: "change" | "input" | "debounced";
  declare readonly hasEventModeValue: boolean;
  declare debounceIntervalValue: number;
  declare readonly hasDebounceIntervalValue: boolean;

  get _eventModes(): Array<"change" | "input"> {
    if (this.hasEventModeValue) {
      const modes = this.eventModeValue.split(" ").map(mode => mode.trim());

      if (modes.length === 1 && modes[0] === "debounced") {
        return ["change", "input"];
      }

      if (!modes.every(mode => ["change", "input"].includes(mode))) {
        throw new Error(`The modeValue provided '${this.eventModeValue}' is not one of the recognised configuration options`);
      }

      return modes as Array<"change" | "input">;
    } else {
      return ["change"];
    }
  }

  get _debounceTimeout(): number {
    return this.hasDebounceIntervalValue ? this.debounceIntervalValue : -1;
  }

  get _mode(): "direct" | "request" {
    if (this.hasSubmitModeValue) {
      if (!["direct", "request"].includes(this.submitModeValue)) {
        throw new Error(`The modeValue provided '${this.submitModeValue}' is not one of the recognised configuration options`);
      }
      return this.submitModeValue;
    } else {
      return "request";
    }
  }

  get inputElements() {
    const el = this.el as HTMLFormElement;
    let subElements = Array.from(el.elements);

    subElements = subElements.filter(el => {
      return !this._ancestorIsTrix(el) && (el as HTMLElement).dataset.noAutosubmit == undefined;
    });

    return subElements;
  }

  connect() {
    this.inputElements.forEach(el => {
      return useEventListener(
        this,
        el as HTMLElement,
        this._eventModes,
        this.submit,
        { debounce: this._debounceTimeout && this._debounceTimeout > 0 ? this._debounceTimeout : undefined },
      );
    });
  }

  _ancestorIsTrix(element: Element) {
    return element.closest("trix-toolbar") !== null && element.closest("trix-editor") !== null;
  }

  private submit() {
    const el = this.el as HTMLFormElement;
    if (this._mode == "request") {
      requestSubmit(el);
    } else {
      el.submit();
    }
  }
}
