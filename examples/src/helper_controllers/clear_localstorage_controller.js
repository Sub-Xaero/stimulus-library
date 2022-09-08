import { BaseController } from "../../../src";

export class ClearLocalstorageController extends BaseController {

  clear() {
    localStorage.clear();
  }

}
