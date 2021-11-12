import {BaseController} from "../../utilities/base_controller";

export class AlertController extends BaseController {

  static values = {message: String};

  declare messageValue: string;

  alert() {
    alert(this.messageValue);
  }

}
