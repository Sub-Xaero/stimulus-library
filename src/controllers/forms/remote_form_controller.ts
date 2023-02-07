import {BaseController} from "../../utilities/base_controller";

export class RemoteFormController extends BaseController {
  static targets = [];

  static values = {selector: String};

  declare readonly hasSelectorValue: boolean;
  declare readonly selectorValue: string;

  get _selector(): string {
    return this.hasSelectorValue ? this.selectorValue : `[data-controller~="${this.identifier}"]`;
  }

  replace(event: { detail: [Element, any, XMLHttpRequest] }) {
    const [data, status, xhr] = event.detail;
    if (data instanceof Node) {
      let newElement: HTMLElement | null = data.querySelector(this._selector);

      if (newElement == null) {
        throw new Error(`expected new form DOM with [data-controller="${this.identifier}"] to be present in returned payload`);
      }

      let parentNode = this.el.parentNode;
      if (parentNode == null) {
        throw new Error('expected form to have a DOM parent, could not execute replaceChild');
      }
      parentNode.replaceChild(newElement, this.el);
      this.dispatchEvent(newElement, this.eventName('replace'));
    } else {
      console.log('Unknown', data);
    }
  }
}
