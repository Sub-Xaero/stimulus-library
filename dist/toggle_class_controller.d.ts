import { Controller } from "stimulus";
export declare type ToggleClassMode = "on" | "off" | "toggle";
export declare class ToggleClassController extends Controller {
    static targets: string[];
    static values: {
        class: StringConstructor;
        mouseEnter: StringConstructor;
        mouseLeave: StringConstructor;
        clickAway: BooleanConstructor;
        initial: StringConstructor;
    };
    readonly toggleTargets: HTMLElement[];
    readonly classValue: string;
    readonly hasClassValue: boolean;
    readonly mouseEnterValue: ToggleClassMode;
    readonly hasMouseEnterValue: boolean;
    readonly mouseLeaveValue: ToggleClassMode;
    readonly hasMouseLeaveValue: boolean;
    readonly clickAwayValue: boolean;
    readonly hasClickAwayValue: boolean;
    readonly initialValue: "on" | "off";
    readonly hasInitialValue: boolean;
    connect(): void;
    clickOutside(): void;
    mouseEnter(): {};
    mouseLeave(): {};
    on(event?: Event): void;
    off(event?: Event): void;
    toggle(event?: Event): void;
    private elementWasToggled;
    private elementToggleStatus;
    private elementToggle;
    private elementOn;
    private elementOff;
}
//# sourceMappingURL=toggle_class_controller.d.ts.map