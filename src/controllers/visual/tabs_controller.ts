import {BaseController} from "../../utilities/base_controller";
import {clamp} from "lodash-es";
import {useEventListener} from "../../mixins/use_event_listener";

export class TabsController extends BaseController {

  static values = {currentTab: Number, equalize: Boolean};
  static targets = ["link", "content"];
  static classes = ["active", "hide"];

  declare currentTabValue: number;
  declare hasCurrentTabValue: boolean;

  declare equalizeValue: boolean;
  declare hasEqualizeValue: boolean;
  declare readonly linkTargets: HTMLElement[];
  declare readonly contentTargets: HTMLElement[];
  declare readonly activeClass: string;
  declare readonly hasActiveClass: boolean;
  declare readonly hideClass: string;
  declare readonly hasHideClass: boolean;

  get _hideClasses(): string[] {
    return this.hideClass.split(' ');
  }

  get _defaultHideClasses(): string[] {
    return ["hide"];
  }

  get _activeClasses(): string[] {
    return this.activeClass.split(' ');
  }

  get _defaultActiveClasses(): string[] {
    return ["is-active"];
  }

  get _currentTab(): number {
    return this.hasCurrentTabValue ? this.currentTabValue : 0;
  }

  get _equalize(): boolean {
    return this.hasEqualizeValue ? this.equalizeValue : false;
  }

  connect() {
    this.linkTargets.forEach((link) => useEventListener(this, link,"click", this.switchTabs));

    if (this._equalize) {
      this._setMinHeight();
    }

    this.currentTabValue = this._currentTab;
  }

  switchTabs(event: Event) {
    event.preventDefault();
    this.currentTabValue = this.linkTargets.indexOf(event.currentTarget as HTMLElement);
  }

  currentTabValueChanged() {
    let index = this._currentTab;
    index = this._clampIndex(index);
    this._selectTab(index);
  }

  _selectTab(index: number) {
    index = this._clampIndex(index);
    let links = this.linkTargets;
    let panels = this.contentTargets;
    let activePanel = panels[index];
    let activeLink = links[index];
    let otherPanels = [...panels.slice(0, index), ...panels.slice(index + 1)];
    let otherLinks = [...links.slice(0, index), ...links.slice(index + 1)];

    this._addActiveClasses(activeLink);
    activeLink.setAttribute('aria-selected', "true");

    this._addActiveClasses(activePanel);
    this._removeHideClasses(activePanel);

    otherLinks.forEach((link) => {
      link.removeAttribute('aria-selected');

      this._removeActiveClasses(link);
    });
    otherPanels.forEach((panel) => {
      this._removeActiveClasses(panel);
      this._addHideClasses(panel);
    });
  }

  _clampIndex(index: number): number {
    return clamp(index, 0, this.contentTargets.length - 1);
  }

  _setMinHeight() {
    let minHeight = 0;

    // determine the minimum height
    this.contentTargets.forEach((content) => {
      let hidden = content.hasAttribute("tab-hidden");
      if (hidden) {
        this._removeHideClasses(content);
      }

      let height = content.offsetHeight;
      if (height > minHeight) {
        minHeight = height;
      }

      if (hidden) {
        this._addHideClasses(content);
      }
    });

    // apply to all tabs
    this.contentTargets.forEach((content) => content.style.minHeight = minHeight + "px");
  }

  private _addHideClasses(el: HTMLElement = this.el) {
    el.setAttribute("tab-hidden", "true");
    if (this.hasHideClass) {
      el.classList.add(...this._hideClasses);
    } else {
      el.classList.add(...this._defaultHideClasses);
    }
  }

  private _removeHideClasses(el: HTMLElement = this.el) {
    el.removeAttribute("tab-hidden");
    if (this.hasHideClass) {
      el.classList.remove(...this._hideClasses);
    } else {
      el.classList.remove(...this._defaultHideClasses);
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
