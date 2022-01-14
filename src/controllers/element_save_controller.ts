import {debounce, get as _get, set as _set} from "lodash-es";
import {BaseController} from '../utilities/base_controller';
import {LocalStorageProxy, useLocalStorage} from "../mixins";
import {dispatchEvent} from "../utilities/events";

export class ElementSaveController extends BaseController {

  static targets = [
    "element",
  ];
  static values = {
    id: String,
    attributes: String,
    restoreOnLoad: Boolean,
  };
  declare readonly hasElementTarget: boolean;
  declare readonly elementTarget: HTMLElement;
  declare readonly elementTargets: HTMLElement[];
  declare readonly idValue: string;
  declare readonly attributesValue: string;
  declare readonly hasIdValue: boolean;
  declare readonly restoreOnLoadValue: boolean;
  declare readonly hasRestoreOnLoadValue: boolean;
  declare _store: LocalStorageProxy<{ [idx: string]: string; }>;

  get _id() {
    if (this.hasIdValue) {
      return this.idValue;
    }
    let elementID = this.el.id;

    if (elementID !== "") {
      return elementID;
    } else {
      throw new Error(`No ID value to uniquely identify this element. Please either specify data-${this.identifier}-id-value or give this element an 'id' attribute. `);
    }
  }

  get _uniqueIdentifier() {
    const url = location.href;
    return `${url} ${this._id}`;
  }

  get _restoreOnLoad() {
    return this.hasRestoreOnLoadValue ? this.restoreOnLoadValue : true;
  }

  get _element(): HTMLElement {
    return this.hasElementTarget ? this.elementTarget : this.el;
  }

  initialize() {
    this.save = debounce(this.save.bind(this), 300);
  }

  connect() {
    this._store = useLocalStorage(this, this._uniqueIdentifier, {});
    requestAnimationFrame(() => {
      if (this._restoreOnLoad) {
        this.restore();
      }
    });
  }

  clear(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this._store.clear();
    this.dispatchEvent(this._element, `element-save:cleared`);
  }

  save(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    let element = this._element;
    let attributes = this.attributesValue.split(" ");
    let data: { [idx: string]: any } = {};
    attributes.forEach((attr: string) => data[attr] = _get(element, attr));
    this._store.value = data;
    this.dispatchEvent(element, `element-save:save:success`);
  }

  restore(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    let element = this._element;
    if (!this._store.isEmpty()) {
      const savedData = this._store.value; // get and parse the saved data from localStorage
      Object.keys(savedData).forEach(
        (attr: string) => _set(element as HTMLElement, attr, savedData[attr]),
      );
      this.dispatchEvent(element, `element-save:restore:success`);
    } else {
      this.dispatchEvent(element, `element-save:restore:empty`);
    }
  }

}
