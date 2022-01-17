import {TrixElementsPayload} from "../../mixins/use_trix_modifiers";
import {TrixBaseController} from "./base_controller";

export class TrixHighlightController extends TrixBaseController {

  get button(): HTMLButtonElement {
    if (this.__button) {
      return this.__button;
    }

    this.__button = this.newButton({
      className: 'trix-button--icon-highlight',
      attribute: 'highlight',
      key: 'h',
      title: 'Highlight',
    });

    return this.__button;
  }

  initialize() {
    this.trix.config.textAttributes.highlight = {
      tagName: 'mark',
      inheritable: true,
      nestable: false,
      parser(element: HTMLElement) {
        let style = window.getComputedStyle(element);
        return element.tagName === 'MARK' || style.backgroundColor === 'yellow';
      },
    };
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
