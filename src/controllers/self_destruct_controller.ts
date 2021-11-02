import {BaseController} from "../utilities/base_controller";
import {useTimeout} from "../mixins/use_timeout";

export class SelfDestructController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;

  connect() {
    requestAnimationFrame(() => {
      // Only start countdown on first paint
      useTimeout(this, () => this.el.remove(), this.secondsValue * 1000);
    });
  }

}
