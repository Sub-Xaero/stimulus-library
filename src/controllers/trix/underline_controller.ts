import {BaseController} from "../../utilities/base_controller";
import {TrixElementsPayload, useTrixModifiers} from "../../mixins/use_trix_modifiers";

export class TrixUnderlineController extends BaseController {

  declare __button: HTMLElement;

  get button(): HTMLElement {
    if (this.__button) {
      return this.__button;
    }

    let newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.className = "trix-button trix-button--icon trix-button--icon-underline";
    newButton.dataset.trixAttribute = "underline";
    newButton.dataset.trixKey = "u";
    newButton.title = "Underline";
    newButton.tabIndex = -1;
    newButton.innerText = "Underline";
    this.__button = newButton;

    return this.__button;
  }

  get trix(): any {
    // @ts-ignore
    if (window.Trix == undefined) {
      throw new Error("This controller does not have access to the global Trix instance. Please set window.Trix to point to your Trix instance.");
    }
    // @ts-ignore
    return window.Trix;
  }

  connect() {
    useTrixModifiers(this);
  }

  install({toolbar, editor}: TrixElementsPayload) {
    // @ts-ignore
    if (window.Trix == undefined) {
      throw new Error("This controller does not have access to the global Trix instance. Please set window.Trix to point to your Trix instance.");
    }

    this.trix.config.textAttributes.underline = {
      tagName: 'u',
      inheritable: true,
      parser: function (element: HTMLElement) {
        let style = window.getComputedStyle(element);
        return style.textDecoration === "underline";
      },
    };
    let textTools = toolbar.querySelector(".trix-button-group--text-tools");
    if (!textTools) {
      throw new Error("Could not find the text tools button group.");
    }
    textTools.insertAdjacentElement("beforeend", this.button);
  }


  uninstall({toolbar, editor}: TrixElementsPayload) {
    this.trix.config.textAttributes.underline = undefined;
  }

}

