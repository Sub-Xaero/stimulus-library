import {TrixElementsPayload} from "../../mixins/use_trix_modifiers";
import {TrixBaseController} from "./base_controller";
import {TrixTextAttribute} from "../../utilities/trix";

function globalInstall() {

}

export class TrixKeyboardController extends TrixBaseController {

  get button(): HTMLButtonElement {
    if (this.__button) {
      return this.__button;
    }

    this.__button = this.newButton({
      className: 'trix-button--icon-kbd',
      attribute: 'kbd',
      key: 'k',
      title: 'Keyboard Button',
    });

    return this.__button;
  }

  initialize() {
    this.trix.config.textAttributes.kbd = {
      tagName: 'kbd',
      inheritable: true,
      parser(element: HTMLElement) {
        return element.tagName === 'KBD';
      },
    } as TrixTextAttribute;
  }

  install({toolbar}: TrixElementsPayload) {
    let textTools = toolbar.querySelector(".trix-button-group--text-tools");
    if (!textTools) {
      throw new Error("Could not find the text tools button group.");
    }
    textTools.insertAdjacentElement("beforeend", this.button);
  }

  uninstall({}: TrixElementsPayload) {
    this.button.remove();
    this.__button = null;
  }

}
