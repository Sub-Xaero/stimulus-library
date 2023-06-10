import { BaseController } from "@stimulus-library/utilities";
import { useDirtyInputTracking } from "@stimulus-library/mixins";

export class DetectDirtyController extends BaseController {

  _restore?: () => void;

  connect() {
    let element = this.el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    let {restore} = useDirtyInputTracking(this, element);
    this._restore = restore;
  }

  restore(event?: Event) {
    event?.preventDefault();
    if (this._restore) {
      this._restore();
    }
  }

}
