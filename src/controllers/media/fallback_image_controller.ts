import {BaseController} from "../../utilities/base_controller";

export class FallbackImageController extends BaseController {

  static values = {placeholder: String};

  declare readonly placeholderValue: string;
  declare readonly hasPlaceholderValue: boolean;

  initialize() {
    this._loadedSuccessfully = this._loadedSuccessfully.bind(this);
    this._fail = this._fail.bind(this);
  }

  connect() {
    let element = this.el as HTMLImageElement;

    element.onerror = this._fail;
    if (element.complete && !this._loadedSuccessfully()) {
      this._fail();
    }
  }

  private _fail() {
    let element = this.el as HTMLImageElement;

    if (this.hasPlaceholderValue && element.src !== this.placeholderValue) {
      this.dispatch(element, "fallback-image:placeholder");
      element.src = this.placeholderValue;
      element.onerror = this._fail;
    } else {
      this.dispatch(element, "fallback-image:fail");
      element.style.display = "none";
    }
  }

  private _loadedSuccessfully(): boolean {
    let element = this.el as HTMLImageElement;
    return element.naturalHeight > 0 && element.naturalWidth > 0;
  }
}
