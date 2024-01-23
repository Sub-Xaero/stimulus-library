import { BaseController, clamp } from "@stimulus-library/utilities";
import { installClassMethods, useCollectionEventListener } from "@stimulus-library/mixins";

export class TabsController extends BaseController {

  static values = { currentTab: Number, equalize: Boolean };
  static targets = ["link", "content"];
  static classes = ["active", "hide"];

  declare currentTabValue: number;
  declare hasCurrentTabValue: boolean;

  declare equalizeValue: boolean;
  declare hasEqualizeValue: boolean;
  declare readonly linkTargets: HTMLElement[];
  declare readonly contentTargets: HTMLElement[];
  declare addHideClasses: (el?: HTMLElement) => void;
  declare removeHideClasses: (el?: HTMLElement) => void;
  declare addActiveClasses: (el?: HTMLElement) => void;
  declare removeActiveClasses: (el?: HTMLElement) => void;

  get defaultHideClasses(): string[] {
    return ["hide"];
  }

  get defaultActiveClasses(): string[] {
    return ["is-active"];
  }

  get _currentTab(): number {
    return this.hasCurrentTabValue ? this.currentTabValue : 0;
  }

  get _equalize(): boolean {
    return this.hasEqualizeValue ? this.equalizeValue : false;
  }

  connect() {
    useCollectionEventListener(this, this.linkTargets, "click", this.switchTabs);
    installClassMethods(this);
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
    requestAnimationFrame(() => this._selectTab(index));
  }

  _selectTab(index: number) {
    index = this._clampIndex(index);
    const links = this.linkTargets;
    const panels = this.contentTargets;
    const activePanel = panels[index];
    const activeLink = links[index];
    const otherPanels = [...panels.slice(0, index), ...panels.slice(index + 1)];
    const otherLinks = [...links.slice(0, index), ...links.slice(index + 1)];

    this.addActiveClasses(activeLink);
    activeLink.setAttribute("aria-selected", "true");

    this.addActiveClasses(activePanel);
    this.removeHideClasses(activePanel);

    otherLinks.forEach((link) => {
      link.removeAttribute("aria-selected");
      this.removeActiveClasses(link);
    });
    otherPanels.forEach((panel) => {
      this.removeActiveClasses(panel);
      this.addHideClasses(panel);
    });
  }

  _clampIndex(index: number): number {
    return clamp(index, 0, this.contentTargets.length - 1);
  }

  _setMinHeight() {
    let minHeight = 0;

    // determine the minimum height
    this.contentTargets.forEach((content) => {
      const hidden = content.hasAttribute("tab-hidden");
      if (hidden) {
        this.removeHideClasses(content);
      }

      const height = content.offsetHeight;
      if (height > minHeight) {
        minHeight = height;
      }

      if (hidden) {
        this.addHideClasses(content);
      }
    });

    // apply to all tabs
    this.contentTargets.forEach((content) => content.style.minHeight = minHeight + "px");
  }

}
