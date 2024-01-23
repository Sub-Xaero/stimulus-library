import { BaseController } from "@stimulus-library/utilities";

export class ClipboardController extends BaseController {

  static targets = ["source", "button", "copy", "fallback"];
  static values = { removeUnused: Boolean };

  declare readonly sourceTarget: HTMLElement;
  declare readonly copyTarget: HTMLElement;
  declare readonly hasCopyTarget: boolean;
  declare readonly fallbackTarget: HTMLElement;
  declare readonly hasFallbackTarget: boolean;

  declare readonly hasRemoveUnusedValue: boolean;
  declare readonly removeUnusedValue: boolean;

  _supported = false;

  connect() {
    this._supported = document.queryCommandSupported("copy");

    if (this.hasRemoveUnusedValue && this.removeUnusedValue) {
      if (this._supported && this.hasFallbackTarget) {
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
    if (this._supported) {
      document.execCommand("copy");
    }
  }
}
