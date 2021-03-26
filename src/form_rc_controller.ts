import {BaseController} from './base_controller';

export class FormRcController extends BaseController {

  static targets = ["form"];

  declare readonly formTarget: HTMLFormElement;

  submit(event?: Event) {
    event?.preventDefault();
    this.dispatch(this.formTarget, "submit");
    this.formTarget.submit();
  }

  reset(event?: Event) {
    event?.preventDefault();
    this.dispatch(this.formTarget, "reset");
    this.formTarget.reset();
  }

}