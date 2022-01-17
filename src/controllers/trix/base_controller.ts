import {BaseController} from "../../utilities/base_controller";
import {useTrixModifiers} from "../../mixins/use_trix_modifiers";

interface TrixButtonAttributes {
  className: string,
  key: string,
  title: string,
  attribute: string,
}

export class TrixBaseController extends BaseController {

  declare __button: HTMLButtonElement | null;

  get trix(): any {
    // @ts-ignore
    if (window.Trix == undefined) {
      throw new Error("This controller does not have access to the global Trix instance. Please set window.Trix to point to your Trix instance.");
    }
    // @ts-ignore
    return window.Trix;
  }

  newButton({className, key, attribute, title}: TrixButtonAttributes): HTMLButtonElement {
    let newButton = document.createElement('button');
    newButton.type = 'button';
    newButton.tabIndex = -1;
    newButton.className = `trix-button trix-button--icon ${className}`;

    newButton.dataset.trixAttribute = attribute;
    newButton.dataset.trixKey = key;
    newButton.title = title;
    newButton.innerText = title;
    return newButton;
  }

  connect() {
    useTrixModifiers(this);
  }

}
