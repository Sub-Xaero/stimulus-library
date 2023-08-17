import { camelCase } from "./strings";
import { BaseController } from "./base_controller";

export class EphemeralController extends BaseController {

  _cleanupSelf() {
    this.cleanup(this.el);
  }

  cleanup(element: HTMLElement) {
    // @ts-ignore
    element.dataset.controller = element.dataset.controller?.replaceAll(new RegExp(`(\\s|^)${this.identifier}(\\s|$)`, "g"), "") || "";
    if (element.dataset.controller == "") {
      // If there are no controllers left, remove the attribute
      delete element.dataset.controller;
    }

    const substringIdentifierValueRegex = new RegExp(`(\\s|^)${this.identifier}\\..+?(\\s|$)`, "g");
    // @ts-ignore
    element.dataset.target = element.dataset.target?.replaceAll(substringIdentifierValueRegex, "") || "";
    delete element.dataset[camelCase(`${this.identifier}-target`)];
    if (element.dataset.target == "") {
      // If there are no targets left, remove the attribute
      delete element.dataset.target;
    }

    // @ts-ignore
    element.dataset.action = element.dataset.target?.replaceAll(substringIdentifierValueRegex, "") || "";
    delete element.dataset[camelCase(`${this.identifier}-action`)];
    if (element.dataset.action == "") {
      // If there are no actions left, remove the attribute
      delete element.dataset.action;
    }

    // @ts-ignore
    const values = this.constructor.values;
    if (values) {
      Object.keys(values).forEach(val => delete element.dataset[camelCase(`${this.identifier}-${val}-value`)]);
    }

    // @ts-ignore
    const classes = this.constructor.classes;
    if (classes) {
      Object.keys(classes).forEach(val => delete element.dataset[camelCase(`${this.identifier}-${val}-class`)]);
    }
  }

}
