import {BaseController} from "../../utilities/base_controller";
import {useFullscreen} from "../../mixins";

export class FullscreenController extends BaseController {

  declare enter: () => void;
  declare exit: () => void;
  declare toggle: () => void;

  connect() {
    let {enter, exit, toggle} = useFullscreen(this);
    this.enter = enter;
    this.exit = exit;
    this.toggle = toggle;
  }

}
