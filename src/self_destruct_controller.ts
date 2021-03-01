import {BaseController} from "./base_controller";

export class SelfDestructController extends BaseController {

  static values = {seconds: Number};

  declare readonly secondsValue: number;
  timeout: null | ReturnType<typeof setTimeout> = null;

  connect() {
    requestAnimationFrame(() => {
      // Only start countdown on first paint
      this.timeout = setTimeout(() => this.element.remove(), this.secondsValue * 1000);
    });
  }

  disconnect() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

}
