import {Controller} from "stimulus";

export class DebugController extends Controller {

  static targets = ["test"];
  declare testTargets: HTMLElement[];

  connect() {
    console.log('Debug Controller', this, this.testTargets);
  }

}
