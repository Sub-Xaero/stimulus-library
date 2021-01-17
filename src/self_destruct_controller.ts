import {Controller} from "stimulus";

export class SelfDestructController extends Controller {

  static values = { seconds: Number }

  declare readonly secondsValue: number;
  timeout: null | ReturnType<typeof setTimeout> = null;

  connect() {
    this.timeout = setTimeout(() => this.element.remove(), this.secondsValue * 1000);
  }

  disconnect() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

}
