import {TrixElementsPayload} from "../../mixins/use_trix_modifiers";
import {TrixBaseController} from "./base_controller";
import {TrixTextAttribute} from "../../utilities/trix";

export class TrixStrikethroughController extends TrixBaseController {

  get button(): HTMLButtonElement {
    if (this.__button) {
      return this.__button;
    }

    this.__button = this.newButton({
      className: 'trix-button--icon-strikethrough',
      attribute: 'strikethrough',
      key: 's',
      title: 'Strikethrough',
    });

    return this.__button;
  }

  initialize() {
    this.trix.config.textAttributes.strikethrough = {
      tagName: 's',
      inheritable: true,
      parser: function (element: HTMLElement) {
        let style = window.getComputedStyle(element);
        return style.textDecoration.includes("line-through") || element.tagName === "S";
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
  }

}
