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
    this._supported = this._clipboardSupported();

    if (this.hasRemoveUnusedValue && this.removeUnusedValue) {
      if (this._supported && this.hasFallbackTarget) {
        this.fallbackTarget.remove();
      } else if (!this._supported && this.hasCopyTarget) {
        this.copyTarget.remove();
      }
    }
  }

  select(event?: Event) {
    event?.preventDefault();
    this._selectSource();
  }

  async copy(event?: Event) {
    event?.preventDefault();

    if (!this._supported) {
      this._selectSource();
      return;
    }

    try {
      await navigator.clipboard.writeText(this._sourceText());
      this.dispatchEvent(this.el, this.eventName("copied"));
    } catch (error) {
      // Leave the text selected so the user can still copy it by hand, and say so.
      this._selectSource();
      this.dispatchEvent(this.el, this.eventName("copy-failed"), { detail: { error } });
    }
  }

  private _clipboardSupported(): boolean {
    return typeof navigator !== "undefined" &&
      !!navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function";
  }

  private _sourceText(): string {
    const source = this.sourceTarget as HTMLInputElement | HTMLTextAreaElement | HTMLElement;
    if ("value" in source && typeof source.value === "string") {
      return source.value;
    }
    return source.textContent ?? "";
  }

  private _selectSource() {
    const source = this.sourceTarget as HTMLInputElement | HTMLTextAreaElement | HTMLElement;
    if ("select" in source && typeof source.select === "function") {
      source.select();
    }
  }
}
