import { installClassMethods, useMutationObserver } from "@stimulus-library/mixins";
import { BaseController } from "@stimulus-library/utilities";

export class TreeViewController extends BaseController {

  static classes = [
    "active",
    "collapsed",
  ];

  declare activeClasses: string[];
  declare activeClassesPresent: (el?: HTMLElement) => boolean;
  declare addActiveClasses: (el?: HTMLElement) => void;
  declare removeActiveClasses: (el?: HTMLElement) => void;
  declare addCollapsedClasses: (el?: HTMLElement) => void;
  declare removeCollapsedClasses: (el?: HTMLElement) => void;

  get defaultActiveClasses(): string[] {
    return ["active"];
  }

  get defaultCollapsedClasses(): string[] {
    return ["collapsed"];
  }

  initialize() {
    this._nodeClicked = this._nodeClicked.bind(this);
  }

  connect() {
    installClassMethods(this);
    useMutationObserver(this, this.el, this.mutate, { subtree: true, childList: true });
    this._setup();
  }

  disconnect() {
    this._teardown();
  }

  _setup() {
    this._setupNode(this.el);
  }

  _setupNode(el: HTMLElement) {
    const process = (e: HTMLElement) => {
      const parent = e.parentElement;
      if (parent) {
        if (!this._nodeActive(parent)) {
          this._hideNode(parent);
        }
        parent.removeEventListener("click", this._nodeClicked);
        parent.addEventListener("click", this._nodeClicked);
      }
    };
    if (el.tagName === "UL" || el.tagName === "OL") {
      process(el);
    }
    el.querySelectorAll("ul, ol").forEach(e => process(e as HTMLElement));
  }

  _teardown() {
    this.el.querySelectorAll("ul, ol, li").forEach((el) => this._teardownNode(el as HTMLElement));
  }

  _teardownNode(el: HTMLElement) {
    [el, ...Array.from(el.querySelectorAll("ul, ol, li")) as HTMLElement[]].forEach((x) => {
      x.removeEventListener("click", this._nodeClicked);
      this.removeActiveClasses(x);
      this.removeCollapsedClasses(x);
    });
  }

  _nodeClicked(event: MouseEvent) {
    if (event) {
      event.stopImmediatePropagation();
    }

    const el = event.target as HTMLElement | null;

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
    return this.activeClassesPresent(el);
  }

  _showNode(el: HTMLElement) {
    this.removeCollapsedClasses(el);
    this.addActiveClasses(el);
  }

  _hideNode(el: HTMLElement) {
    this.removeActiveClasses(el);
    this.addCollapsedClasses(el);
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

}
