import {BaseController} from "../utilities/base_controller";

export class DismissableController extends BaseController {

  dismiss() {
    this.el.remove();
  }

}
