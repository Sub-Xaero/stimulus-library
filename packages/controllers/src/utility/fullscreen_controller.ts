import { BaseController } from "@stimulus-library/utilities";
import { useFullscreen } from "@stimulus-library/mixins";

export class FullscreenController extends BaseController {

  declare enter: () => void;
  declare exit: () => void;
  declare toggle: () => void;

  connect() {
    const { enter, exit, toggle } = useFullscreen(this);
    this.enter = enter;
    this.exit = exit;
    this.toggle = toggle;
  }

}
