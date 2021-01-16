import {Controller} from "stimulus";

export class DismissableController extends Controller {

  dismiss() {
    this.element.remove();
  }

}
