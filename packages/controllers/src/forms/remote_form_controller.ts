import { BaseController } from "@stimulus-library/utilities";

export class RemoteFormController extends BaseController {
  static targets = [];

  static values = { selector: String };

  declare readonly hasSelectorValue: boolean;
  declare readonly selectorValue: string;

  get _selector(): string {
    return this.hasSelectorValue ? this.selectorValue : `[data-controller~="${this.identifier}"]`;
  }

  replace(event: { detail: [Element, any, XMLHttpRequest] }) {
    const [data, _status, _xhr] = event.detail;
    if (data instanceof Node) {
      const newElement: HTMLElement | null = data.querySelector(this._selector);

      if (newElement == null) {
        throw new Error(`expected new form DOM with [data-controller="${this.identifier}"] to be present in returned payload`);
      }

      const parentNode = this.el.parentNode;
      if (parentNode == null) {
        throw new Error("expected form to have a DOM parent, could not execute replaceChild");
      }
      parentNode.replaceChild(newElement, this.el);
      this.dispatchEvent(newElement, this.eventName("replace"));
    } else {
      console.log("Unknown", data);
    }
  }
}
