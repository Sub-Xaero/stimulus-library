import {BaseController} from "./base_controller";

export class DismissableController extends BaseController {

  dismiss() {
    this.element.remove();
  }

}
