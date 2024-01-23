import { BaseController } from "@stimulus-library/utilities";
import { useDirtyFormTracking } from "@stimulus-library/mixins";

export class DetectDirtyFormController extends BaseController {

  _restore?: () => void;

  connect() {
    const { restore } = useDirtyFormTracking(this, this.el as HTMLFormElement);
    this._restore = restore;
  }

  restore(event?: Event) {
    event?.preventDefault();
    if (this._restore) {
      this._restore();
    }
  }
}
