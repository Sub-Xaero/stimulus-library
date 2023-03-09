import { BaseController } from "@stimulus-library/utilities";

export class DebugController extends BaseController {

  static targets = ["test"];
  declare testTargets: HTMLElement[];

  connect() {
    console.log("Debug Controller", this, this.testTargets);
  }
}
