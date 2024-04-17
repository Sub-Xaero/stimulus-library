import { BaseController } from "stimulus-library";

export class UpdateDateController extends BaseController {
  static values = {property: String};

  update() {
    let newTime = new Date();
    newTime.setMonth(11);
    newTime.setDate(24);
    newTime.setMinutes(0);
    newTime.setSeconds(0);
    this.el.dataset[this.propertyValue] = newTime.toISOString();
  }
}
