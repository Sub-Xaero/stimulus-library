import {TrixElementsPayload} from "../../mixins/use_trix_modifiers";
import {TrixBaseController} from "./base_controller";

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
      parser: function (element: HTMLElement) {
        let style = window.getComputedStyle(element);
        return style.textDecoration.includes("underline") || element.tagName === "U";
      },
    };
  }

  install({toolbar, editor}: TrixElementsPayload) {
    let textTools = toolbar.querySelector(".trix-button-group--text-tools");
    if (!textTools) {
      throw new Error("Could not find the text tools button group.");
    }
    textTools.insertAdjacentElement("beforeend", this.button);
  }


  uninstall({toolbar, editor}: TrixElementsPayload) {
    this.button.remove();
  }

}

