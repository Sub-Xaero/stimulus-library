import {BaseController} from '../../utilities/base_controller';

export class PrintController extends BaseController {

  print(event?: Event) {
    event?.preventDefault();
    window.print();
  }

}
