import { BaseController } from "stimulus-library";

export class ClearLocalstorageController extends BaseController {

  clear() {
    localStorage.clear();
  }

}
