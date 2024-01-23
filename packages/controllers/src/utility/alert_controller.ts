import { BaseController } from "@stimulus-library/utilities";

export class AlertController extends BaseController {

  static values = { message: String };

  declare messageValue: string;

  alert() {
    alert(this.messageValue);
  }

}
