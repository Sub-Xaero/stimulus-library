import { BaseController } from "@stimulus-library/utilities";

export class DismissableController extends BaseController {

  dismiss() {
    this.el.remove();
  }

}

export class RemoveController extends DismissableController {
}