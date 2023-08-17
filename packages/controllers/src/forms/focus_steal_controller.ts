import { BaseController } from "@stimulus-library/utilities";

export class FocusStealController extends BaseController {


  static values = {
    mode: String,
  };

  declare modeValue: "immediate" | "wait";
  declare hasModeValue: boolean;

  get _mode() {
    const MODES = ["immediate", "wait"];
    if (this.hasModeValue) {
      if (!MODES.includes(this.modeValue)) {
        throw new Error(`The given modeValue '${this.modeValue}' is not one of the supported modes: "${MODES.join("\", \"")}"`);
      } else {
        return this.modeValue;
      }
    } else {
      return MODES[0];
    }
  }

  connect() {
    if (this._mode == "immediate") {
      this.steal();
    }
  }

  steal() {
    (this.el as HTMLInputElement).focus();
  }

}