import {useMutation} from "stimulus-use";
import {BaseController} from "../../utilities/base_controller";

export class TreeViewController extends BaseController {

  static classes = [
    "active",
    "collapsed",
  ];

  declare readonly activeClass: string;
  declare readonly hasActiveClass: boolean;
  declare readonly collapsedClass: string;
  declare readonly hasCollapsedClass: boolean;

  get _collapsedClasses(): string[] {
    return this.hasCollapsedClass ? this.collapsedClass.split(' ') : this._defaultCollapsedClasses;
  }

  get _defaultCollapsedClasses(): string[] {
    return ['collapsed'];
  }

  get _activeClasses(): string[] {
    return this.hasActiveClass ? this.activeClass.split(' ') : this._defaultActiveClasses;
  }

  get _defaultActiveClasses(): string[] {
    return ['active'];
  }

  initialize() {
    this._nodeClicked = this._nodeClicked.bind(this);
  }

  connect() {
    this._setup();
    useMutation(this, {subtree: true, childList: true});
  }

  disconnect() {
    this._teardown();
  }

  _setup() {
    this._setupNode(this.el);
  }

  _setupNode(el: HTMLElement) {
    const process = (e: HTMLElement) => {
      let parent = e.parentElement;
      if (parent) {
        if (!this._nodeActive(parent)) {
          this._hideNode(parent);
        }
        parent.removeEventListener("click", this._nodeClicked);
        parent.addEventListener("click", this._nodeClicked);
      }
    };
    if (el.tagName === 'UL' || el.tagName === 'OL') {
      process(el);
    }
    el.querySelectorAll("ul, ol").forEach(e => process(e as HTMLElement));
  }

  _teardown() {
    this.el.querySelectorAll("ul, ol, li").forEach((el) => this._teardownNode(el as HTMLElement));
  }

  _teardownNode(el: HTMLElement) {
    [el, ...Array.from(el.querySelectorAll('ul, ol, li')) as HTMLElement[]].forEach((x) => {
      x.removeEventListener("click", this._nodeClicked);
      this._removeActiveClasses(x);
      this._removeCollapsedClasses(x);
    });
  }

  _nodeClicked(event: MouseEvent) {
    if (event) {
      event.stopImmediatePropagation();
    }

    let el = event.target as HTMLElement | null;

    if (!el || !this._hasNested(el)) {
      return;
    }

    if (this._nodeActive(el)) {
      this._hideNode(el);
    } else {
      this._showNode(el);
    }
  }

  _nodeActive(el: HTMLElement): boolean {
    return this._activeClasses.every(klass => el.classList.contains(klass));
  }

  _showNode(el: HTMLElement) {
    this._removeCollapsedClasses(el);
    this._addActiveClasses(el);
  }

  _hideNode(el: HTMLElement) {
    this._removeActiveClasses(el);
    this._addCollapsedClasses(el);
  }

  _hasNested(el: HTMLElement): boolean {
    return el.querySelectorAll("ul, ol").length > 0;
  }

  mutate(entries: MutationRecord[]) {
    for (const mutation of entries) {
      if (mutation.type === "childList") {
        (Array.from(mutation.addedNodes || []) as HTMLElement[]).forEach(el => this._setupNode(el));
        (Array.from(mutation.removedNodes || []) as HTMLElement[]).forEach(el => this._teardownNode(el));
      }
    }
  }

  private _addCollapsedClasses(el: HTMLElement = this.el) {
    if (this.hasCollapsedClass) {
      el.classList.add(...this._collapsedClasses);
    } else {
      el.classList.add(...this._defaultCollapsedClasses);
    }
  }

  private _removeCollapsedClasses(el: HTMLElement = this.el) {
    if (this.hasCollapsedClass) {
      el.classList.remove(...this._collapsedClasses);
    } else {
      el.classList.remove(...this._defaultCollapsedClasses);
    }
  }

  private _addActiveClasses(el: HTMLElement = this.el) {
    if (this.hasActiveClass) {
      el.classList.add(...this._activeClasses);
    } else {
      el.classList.add(...this._defaultActiveClasses);
    }
  }

  private _removeActiveClasses(el: HTMLElement = this.el) {
    if (this.hasActiveClass) {
      el.classList.remove(...this._activeClasses);
    } else {
      el.classList.remove(...this._defaultActiveClasses);
    }
  }
}
