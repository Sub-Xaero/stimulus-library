import { EphemeralController } from "@stimulus-library/utilities";

export class TeleportController extends EphemeralController {

  static values = { target: String, insert: String, immediate: Boolean };

  declare readonly immediateValue: boolean;
  declare readonly hasImmediateValue: boolean;
  declare readonly targetValue: string;
  declare readonly hasInsertValue: boolean;
  declare readonly insertValue: InsertPosition | "replaceOuter" | "replaceInner" | "prepend" | "append";

  connect() {
    if (!this.hasInsertValue) {
      throw new Error("`insert` value was not specified");
    }

    requestAnimationFrame(() => {
      if (this.hasImmediateValue && this.immediateValue) {
        this.execute();
      }
    });
  }

  execute(event?: Event) {
    event?.preventDefault();
    const element = this.el;
    const destination = document.querySelector(this.targetValue);

    if (destination == null) {
      this.dispatchEvent(element, this.eventName("error"));
      return;
    }

    const copy = element.cloneNode(true) as HTMLElement;
    this.cleanup(copy);

    switch (this.insertValue) {
      case "beforebegin":
      case "beforeend":
      case "afterend":
      case "afterbegin":
        destination.insertAdjacentHTML(this.insertValue, copy.outerHTML);
        break;
      case "replaceOuter":
        destination.outerHTML = copy.outerHTML;
        break;
      case "replaceInner":
        destination.innerHTML = copy.outerHTML;
        break;
      case "prepend":
        destination.insertAdjacentHTML("afterbegin", copy.outerHTML);
        break;
      case "append":
        destination.insertAdjacentHTML("beforeend", copy.outerHTML);
        break;
      default:
        throw new Error("`insert` value was not specified");

    }
    element.remove();
  }

}
