import {Controller} from "stimulus";

export class ConfirmNavigationController extends Controller {

  static values = {message: String};

  declare readonly messageValue: string;

  connect() {
    let confirmMessage = this.messageValue;
    window.onbeforeunload = () => (confirmMessage == null ? true : confirmMessage);
    window.addEventListener("popstate", this.handlePopstate);
    window.addEventListener("submit", () => {
      window.removeEventListener("popstate", this.handlePopstate);
      window.onbeforeunload = null;
    });
    // TODO: Turbo navigation events
  }

  handlePopstate(event: PopStateEvent) {
    return false;
  }

}
