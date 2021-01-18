import {Controller} from "stimulus";
import {useClickOutside, useHover} from "stimulus-use";

export type ToggleClassMode = "on" | "off" | "toggle"

export class ToggleClassController extends Controller {

  static targets = ["toggle"];
  static values = {
    class: String,
    mouseEnter: String,
    mouseLeave: String,
    clickAway: Boolean,
    initial: Boolean,
  };

  declare readonly toggleTargets: HTMLElement[];

  declare readonly classValue: string;
  declare readonly hasClassValue: boolean;

  declare readonly mouseEnterValue: ToggleClassMode;
  declare readonly hasMouseEnterValue: boolean;

  declare readonly mouseLeaveValue: ToggleClassMode;
  declare readonly hasMouseLeaveValue: boolean;

  declare readonly clickAwayValue: boolean;
  declare readonly hasClickAwayValue: boolean;

  declare readonly initialValue: "on" | "off";

  connect() {
    if (this.initialValue === "on") {
      this.toggleTargets.forEach((target) => this.elementOn(target));
    } else {
      this.toggleTargets.forEach((target) => this.elementOff(target));
    }

    if (this.hasMouseEnterValue || this.hasMouseLeaveValue) {
      useHover(this);
    }

    if (this.hasClickAwayValue && this.clickAwayValue) {
      useClickOutside(this);
    }

    if (!this.hasClassValue) {
      throw new Error("data-toggle-class-class-value must not be empty");
    }
  }

  clickOutside() {
    this.toggleTargets.forEach((target) => {
      if (this.elementWasToggled(target)) {
        this.elementToggleStatus(target);
        this.elementToggle(target);
      }
    });
  }

  mouseEnter() {
    if (this.hasMouseEnterValue) {
      switch (this.mouseEnterValue) {
        case "on":
          this.on();
          break;
        case "off":
          this.off();
          break;
        case "toggle":
          this.toggle();
          break;
      }
    }
    return {};
  }

  mouseLeave() {
    if (this.hasMouseLeaveValue) {
      switch (this.mouseLeaveValue) {
        case "on":
          this.off(); // Reverse behaviour when hover state ends
          break;
        case "off":
          this.on(); // Reverse behaviour when hover state ends
          break;
        case "toggle":
          this.toggle();
          break;
      }
    }
    return {};
  }

  on(event?: Event) {
    this.toggleTargets.forEach((target) => {
      this.elementToggleStatus(target);
      this.elementOn(target);
    });
  }

  off(event?: Event) {
    this.toggleTargets.forEach((target) => {
      this.elementToggleStatus(target);
      this.elementOff(target);
    });
  }

  toggle(event?: Event) {
    this.toggleTargets.forEach((target) => {
      this.elementToggleStatus(target);
      this.elementToggle(target);
    });
  }

  private elementWasToggled(el: HTMLElement): boolean {
    return el.dataset.toggled == "true";
  }

  private elementToggleStatus(el: HTMLElement) {
    if (this.elementWasToggled(el)) {
      delete el.dataset.toggled;
    } else {
      el.dataset.toggled = "true";
    }
  }

  private elementToggle(el: HTMLElement) {
    let classes = this.classValue.split(" ");
    classes.forEach((klass) => el.classList.toggle(klass));
  }

  private elementOn(el: HTMLElement) {
    let classes = this.classValue.split(" ");
    classes.forEach((klass) => el.classList.toggle(klass, true));
  }

  private elementOff(el: HTMLElement) {
    let classes = this.classValue.split(" ");
    classes.forEach((klass) => el.classList.toggle(klass, false));
  }

}
