import {LoadBlockController} from "./load_block_controller";
import {useInterval} from "../../mixins/use_interval";

export class PollBlockController extends LoadBlockController {

  static targets = ["replace"];
  static values = {endpoint: String, errorMessage: String, selector: String, seconds: Number};

  declare readonly secondsValue: number;

  connect() {
    requestAnimationFrame(() => {
      this._timeout();
      useInterval(this, this._timeout, this.secondsValue * 1000);
    });
  }

  async _timeout() {
    await this.loadContent();
  }

}
