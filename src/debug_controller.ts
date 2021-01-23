import {BaseController} from "./base_controller";

export class DebugController extends BaseController {

  static targets = ["test"];
  declare testTargets: HTMLElement[];

  connect() {
    console.log("Debug Controller", this, this.testTargets);
  }
}
