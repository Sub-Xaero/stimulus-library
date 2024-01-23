import { BaseController } from "@stimulus-library/utilities";
import { useMutationObserver } from "@stimulus-library/mixins";

export class TurboFrameHistoryController extends BaseController {
  declare navigator: any;

  initialize() {
    this.mutate = this.mutate.bind(this);
  }

  connect() {
    // @ts-ignore
    if (!window.Turbo) {
      throw new Error("Expected Turbo to be defined on the window.");
    }
    // @ts-ignore
    const { navigator } = window.Turbo;
    this.navigator = navigator;
    useMutationObserver(this, this.el, this.mutate, { attributes: true });
  }

  mutate(entries: MutationRecord[]) {
    entries.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "src") {
        const src = this.element.getAttribute("src");
        if (src != null) {
          this.navigator.history.push(new URL(src));
        }
      }
    });
  }
}
