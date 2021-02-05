import {BaseController} from "./base_controller";
import {scrollToElement} from "./utilities/scroll";
import dialogPolyfill from "dialog-polyfill";

export class LightboxImageController extends BaseController {

  static values = {
    src: String,
    srcSet: String,
    sizes: String,
  };
  static classes = ["modal", "image"];

  declare readonly hasModalClass: boolean;
  declare readonly modalClass: string;
  declare readonly hasImageClass: boolean;
  declare readonly imageClass: string;
  declare readonly hasSrcValue: boolean;
  declare readonly srcValue: string;
  declare readonly hasSrcSetValue: boolean;
  declare readonly srcSetValue: string;
  declare readonly hasSizesValue: boolean;
  declare readonly sizesValue: string;
  _dialog: HTMLDialogElement | null = null;

  get src(): string {
    return this.hasSrcValue ? this.srcValue : (this.element as HTMLImageElement).src;
  }

  get srcSet(): string {
    return this.hasSrcSetValue ? this.srcSetValue : (this.element as HTMLImageElement).srcset;
  }

  get sizes(): string {
    return this.hasSizesValue ? this.sizesValue : (this.element as HTMLImageElement).sizes;
  }

  get modalClassName() {
    return this.hasModalClass ? this.modalClass : "image-lightbox-dialog";
  }

  get imageClassName() {
    return this.hasImageClass ? this.imageClass : "image-lightbox-image";
  }

  initialize() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  connect() {
  }

  open() {
    let element = this.element as HTMLImageElement;
    if (this._dialog) {
      return;
    }
    this._dialog = document.createElement("dialog");

    let image = document.createElement("img") as HTMLImageElement;
    image.className = this.imageClassName;
    image.src = this.src;
    image.srcset = this.srcSet;
    image.sizes = this.sizes;
    this._dialog.appendChild(image);

    element.insertAdjacentElement("afterend", this._dialog);
    dialogPolyfill.registerDialog(this._dialog);
    this._dialog.className = this.modalClassName;
    this._dialog.showModal();
    scrollToElement(this._dialog, {behavior: "smooth", block: "end"}).catch(() => this._dialog!.scrollIntoView(false));
    this._dialog.addEventListener("click", this.close);
    this._dialog.addEventListener("cancel", this.close);
    this._dialog.addEventListener("close", this.close);
  }

  close() {
    if (this._dialog) {
      this._dialog.close();
      this._dialog.remove();
      this._dialog = null;
      scrollToElement(this.element, {behavior: "smooth", block: "end"}).catch(() => this.element.scrollIntoView(false));
    }
  }

} 