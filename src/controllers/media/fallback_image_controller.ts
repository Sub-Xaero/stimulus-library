import {BaseController} from "../../utilities/base_controller";

export class FallbackImageController extends BaseController {

  static values = {placeholder: String};

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;

  connect() {
    let element = this.el as HTMLImageElement;

    element.onerror = () => {
      if (this.hasPlaceholderValue) {
        element.src = this.placeholderValue;
      } else {
        element.style.display = "none";
      }
    };
  }

}
