import {BaseController} from "../../utilities/base_controller";
import {requestSubmit} from "../../utilities/request_submit";
import {useEventListener} from "../../mixins/use_event_listener";

export class AutoSubmitFormController extends BaseController {

  static values = {submitMode: String, eventMode: String, debounceInterval: Number};
  declare readonly submitModeValue: "direct" | "request";
  declare readonly hasSubmitModeValue: boolean;
  declare eventModeValue: 'change' | 'input' | 'debounced';
  declare readonly hasEventModeValue: boolean;
  declare debounceIntervalValue: number;
  declare readonly hasDebounceIntervalValue: boolean;

  get _eventModes(): Array<'change' | 'input'> {
    if (this.hasEventModeValue) {
      let modes = this.eventModeValue.split(' ').map(mode => mode.trim());

      if (modes.length === 1 && modes[0] === 'debounced') {
        return ['change', 'input'];
      }

      if (!modes.every(mode => ['change', 'input'].includes(mode))) {
        throw new Error(`The modeValue provided '${this.eventModeValue}' is not one of the recognised configuration options`);
      }

      return modes as Array<'change' | 'input'>;
    } else {
      return ["change"];
    }
  }

  get _debounceTimeout(): number {
    return this.hasDebounceIntervalValue ? this.debounceIntervalValue : 1000;
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

  get _cssSelector() {
    let inputTypes = ['input', 'textarea', 'select'];
    let ignore = ':not([data-no-autosubmit])';
    return inputTypes.map(type => type.concat(ignore)).join(',');
  }

  get inputElements() {
    return this.element.querySelectorAll(this._cssSelector);
  }

  connect() {
    this.inputElements.forEach(el => {
      return useEventListener(
        this,
        el as HTMLElement,
        this._eventModes,
        this.submit,
        {debounce: this._eventMode == 'debounced' ? this._debounceTimeout : undefined},
      );
    });
  }

  private submit() {
    let el = this.el as HTMLFormElement;
    if (this._mode == 'request') {
      requestSubmit(el);
    } else {
      el.submit();
    }
  }
}
