import {BaseController} from "../../utilities/base_controller";

export class PresenceController extends BaseController {

  connect() {
    this.dispatch(this.el, "presence:added");
  }

  disconnect() {
    this.dispatch(this.el, "presence:removed");
  }

}
