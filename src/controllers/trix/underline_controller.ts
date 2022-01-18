import {TrixElementsPayload} from "../../mixins/use_trix_modifiers";
import {TrixBaseController} from "./base_controller";
import {TrixTextAttribute} from "../../utilities/trix";

export class TrixUnderlineController extends TrixBaseController {

  get button(): HTMLButtonElement {
    if (this.__button) {
      return this.__button;
    }

    this.__button = this.newButton({
      className: 'trix-button--icon-underline',
      attribute: 'underline',
      key: 'u',
      title: 'Underline',
    });

    return this.__button;
  }

  initialize() {
    this.trix.config.textAttributes.underline = {
      tagName: 'u',
      inheritable: true,
      parser(element) {
        return window.getComputedStyle(element).textDecoration.includes("underline") || element.tagName === "U";
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

