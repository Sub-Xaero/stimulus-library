// IDEA: A controller that copies the DOM element, inserts it elsewhere, then removes itself, stripping out the controller from the copied element.
import {Controller} from "stimulus";

export class TeleportController extends Controller {

  static values = {target: String, insert: String};
  declare readonly targetValue: string;
  declare readonly insertValue: InsertPosition | "replaceOuter" | "replaceInner" | "prepend" | "append";

  connect() {
    let destination = document.querySelector(this.targetValue);

    if (destination == null) {
      this.element.dispatchEvent(new CustomEvent("teleport:error", {bubbles: true, cancelable: true}));
      return;
    }

    let copy = this.element.cloneNode(true) as HTMLElement;
    copy.removeAttribute(`${this.identifier}-insert-adjacent-html-value`);
    copy.setAttribute(
      "data-controller",
      copy.getAttribute("data-controller")?.replace(new RegExp(`(^|\s)${this.identifier}($|\s)`), "") || "",
    );
    copy.removeAttribute(`data-controller${this.identifier}-insert-adjacent-html-value`);

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
    }
  }

}
