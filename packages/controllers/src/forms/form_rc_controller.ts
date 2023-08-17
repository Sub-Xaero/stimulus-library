import { BaseController, requestReset, requestSubmit } from "@stimulus-library/utilities";

export class FormRcController extends BaseController {

  static targets = ["form"];
  static values = {
    formSelector: String,
    submitMode: String,
  };

  declare submitModeValue: "direct" | "request";
  declare readonly hasSubmitModeValue: boolean;
  declare readonly formTarget: HTMLFormElement;
  declare readonly formSelectorValue: string;
  declare readonly hasFormSelectorValue: boolean;

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

  get form(): HTMLFormElement {
    let form: HTMLFormElement | null;
    if (this.hasFormSelectorValue) {
      form = document.querySelector(this.formSelectorValue);
      if (!form) {
        throw new Error(`Could not find a form on the page that matches selector '${this.formSelectorValue}'`);
      }
    } else {
      form = this.formTarget;
    }
    return form;
  }

  submit(event?: Event) {
    event?.preventDefault();
    const el = this.form;
    if (this._mode == "request") {
      requestSubmit(el);
    } else {
      el.submit();
    }
  }

  reset(event?: Event) {
    event?.preventDefault();
    requestReset(this.form);
  }

}