import { BaseController } from "../../../packages/stimulus-library/src";

export class ClearLocalstorageController extends BaseController {

  clear() {
    localStorage.clear();
  }

}
