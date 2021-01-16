import {Controller} from "stimulus";

export class FallbackImageController extends Controller {

  static values = {placeholder: String};

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;

  connect() {
    let element = this.element as HTMLImageElement;

    element.onerror = () => {
      if (this.hasPlaceholderValue) {
        element.src = this.placeholderValue;
      } else {
        element.style.display = "none";
      }
    };
  }

}
