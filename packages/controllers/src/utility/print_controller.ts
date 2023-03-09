import { BaseController } from "@stimulus-library/utilities";

export class PrintController extends BaseController {

  print(event?: Event) {
    event?.preventDefault();
    window.print();
  }

}
