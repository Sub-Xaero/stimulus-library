import {BaseController} from "../../utilities/base_controller";

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

  get _activeClass(): string {
    return this.hasActiveClass ? this.activeClass : "is-active";
  }

  get _hideClass(): string {
    return this.hasHideClass ? this.hideClass : "hide";
  }

  get _currentTab(): number {
    return this.hasCurrentTabValue ? this.currentTabValue : 0;
  }

  get _equalize(): boolean {
    return this.hasEqualizeValue ? this.equalizeValue : false;
  }

  initialize() {
    this.switchTabs = this.switchTabs.bind(this);
  }

  connect() {
    this.linkTargets.forEach((link) => link.addEventListener("click", this.switchTabs));

    if (this._equalize) {
      this._setMinHeight();
    }

    this.currentTabValue = this._currentTab;
  }

  disconnect() {
    this.linkTargets.forEach((link) => link.removeEventListener("click", this.switchTabs));
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

    activeLink.classList.add(this.activeClass);
    activeLink.setAttribute('aria-selected', "true");

    activePanel.classList.add(this.activeClass);
    activePanel.classList.remove(this.hideClass);

    otherLinks.forEach((link) => {
      link.classList.remove(this.activeClass);
      link.removeAttribute('aria-selected');
    });
    otherPanels.forEach((panel) => {
      panel.classList.remove(this.activeClass);
      panel.classList.add(this.hideClass);
    });
  }

  _clampIndex(index: number): number {
    index = Math.min(this.contentTargets.length - 1, index);
    index = Math.max(0, index);
    return index;
  }

  _setMinHeight() {
    let minHeight = 0;

    // determine the minimum height
    this.contentTargets.forEach((content) => {
      let hidden = content.classList.contains(this.hideClass);
      if (hidden) {
        content.classList.remove(this.hideClass);
      }

      let height = content.offsetHeight;
      if (height > minHeight) {
        minHeight = height;
      }

      if (hidden) {
        content.classList.add(this.hideClass);
      }
    });

    // apply to all tabs
    this.contentTargets.forEach((content) => content.style.minHeight = minHeight + "px");
  }
}
