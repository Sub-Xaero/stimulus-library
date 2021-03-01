import {BaseController} from "./base_controller";

export class ClipboardController extends BaseController {

  static targets = ["button", "copy", "fallback"];
  static values = {removeUnused: Boolean};

  declare readonly sourceTarget: HTMLElement;
  declare readonly copyTarget: HTMLElement;
  declare readonly hasCopyTarget: boolean;
  declare readonly fallbackTarget: HTMLElement;
  declare readonly hasFallbackTarget: boolean;

  declare readonly hasRemoveUnusedValue: boolean;
  declare readonly removeUnusedValue: boolean;

  supported = false;

  connect() {
    this.supported = document.queryCommandSupported("copy");

    if (this.hasRemoveUnusedValue && this.removeUnusedValue) {
      if (this.supported && this.hasFallbackTarget) {
        this.fallbackTarget.remove();
      } else if (this.hasCopyTarget) {
        this.copyTarget.remove();
      }
    }
  }

  select(event: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    (this.sourceTarget as HTMLInputElement | HTMLTextAreaElement).select();
  }

  copy(event: ClipboardEvent) {
    if (event) {
      event.preventDefault();
    }
    (this.sourceTarget as HTMLInputElement | HTMLTextAreaElement).select();
    if (this.supported) {
      document.execCommand("copy");
    }
  }
}
