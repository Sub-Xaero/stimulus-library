import {PrintController} from "./utility/print_controller";
import {useEventListener} from "../mixins/use_event_listener";
import {installClassMethods} from "../mixins/install_class_methods";

export class PrintButtonController extends PrintController {

  static classes = [
    'unsupported',
  ];
  declare addUnsupportedClasses: (el?: HTMLElement) => void;

  get defaultUnsupportedClasses(): string[] {
    return ["unsupported"];
  }

  connect() {
    installClassMethods(this);
    if (!("print" in window)) {
      this.addUnsupportedClasses();
    }
    useEventListener(this, this.el, 'click', this.print);
  }

}
