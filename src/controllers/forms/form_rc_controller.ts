import {BaseController} from '../../utilities/base_controller';
import {requestReset, requestSubmit} from "../../utilities/requestSubmit";

export class FormRcController extends BaseController {

  static targets = ["form"];

  declare readonly formTarget: HTMLFormElement;

  submit(event?: Event) {
    event?.preventDefault();
    requestSubmit(this.formTarget);
  }

  reset(event?: Event) {
    event?.preventDefault();
    requestReset(this.formTarget)
  }

}