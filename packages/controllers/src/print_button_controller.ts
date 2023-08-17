import { PrintController } from "./utility/print_controller";
import { installClassMethods, useEventListener } from "@stimulus-library/mixins";

export class PrintButtonController extends PrintController {

  static classes = [
    "unsupported",
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
    useEventListener(this, this.el, "click", this.print);
  }

}
