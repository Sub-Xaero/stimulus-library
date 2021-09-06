import {LoadBlockController} from "./load_block_controller";

export class PollBlockController extends LoadBlockController {

  static targets = ["replace"];
  static values = {endpoint: String, errorMessage: String, selector: String, seconds: Number};

  declare readonly secondsValue: number;
  _intervalHandle: null | number = null;

  initialize() {
    this._timeout = this._timeout.bind(this);
  }

  connect() {
    requestAnimationFrame(() => {
      this._timeout();
      this._intervalHandle = window.setInterval(this._timeout, this.secondsValue * 1000);
    });
  }

  disconnect() {
    if (this._intervalHandle) {
      window.clearInterval(this._intervalHandle);
    }
  }

  async _timeout() {
    await this.loadContent();
  }

}
