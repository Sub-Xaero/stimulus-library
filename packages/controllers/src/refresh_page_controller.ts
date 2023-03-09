import { BaseController } from "@stimulus-library/utilities";

export class RefreshPageController extends BaseController {

  static values = {
    onLoad: Boolean,
  };

  declare onLoadValue: boolean;
  declare readonly hasOnLoadValue: boolean;

  get onLoad(): boolean {
    return this.hasOnLoadValue ? this.onLoadValue : false;
  }

  connect() {
    if (this.onLoad) {
      this.refresh();
    }
  }

  refresh() {
    location.reload();
  }

}
