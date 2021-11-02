import {BaseController} from '../../utilities/base_controller';
import {requestReset, requestSubmit} from "../../utilities/request_submit";

export class FormRcController extends BaseController {

  static targets = ["form"];
  static values = { formSelector: String};

  declare readonly formTarget: HTMLFormElement;

  declare readonly formSelectorValue: string;
  declare readonly hasFormSelectorValue: boolean;

  get form(): HTMLFormElement {
    let form: HTMLFormElement | null;
    if (this.hasFormSelectorValue) {
      form = document.querySelector(this.formSelectorValue);
      if (!form) {
        throw new Error(`Could not find a form on the page that matches selector '${this.formSelectorValue}'`)
      }
    } else {
      form = this.formTarget;
    }
    return form;
  }

  submit(event?: Event) {
    event?.preventDefault();
    requestSubmit(this.form);
  }

  reset(event?: Event) {
    event?.preventDefault();
    requestReset(this.form)
  }

}