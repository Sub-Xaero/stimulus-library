import {BaseController} from "../../utilities/base_controller";

export class PresenceController extends BaseController {

  static values = {name: String};

  declare nameValue: string;
  declare readonly hasNameValue: boolean;

  get name(): string {
    return this.hasNameValue ? `${this.nameValue}:` : ``;
  }

  connect() {
    this.dispatch(this.el, `${this.nameValue}presence:added`);
  }

  disconnect() {
    this.dispatch(this.el, `${this.nameValue}presence:removed`);
  }

}
