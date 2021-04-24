import { Duration } from "date-fns";
import { BaseController } from "../../utilities/base_controller";
export declare class CountdownController extends BaseController {
    static values: {
        deadline: StringConstructor;
        removeUnused: BooleanConstructor;
    };
    static targets: string[];
    static classes: string[];
    readonly deadlineValue: string;
    readonly removeUnusedValue: boolean;
    readonly hasRemoveUnusedValue: boolean;
    readonly hasYearsTarget: boolean;
    readonly yearsTarget: HTMLElement;
    readonly hasMonthsTarget: boolean;
    readonly monthsTarget: HTMLElement;
    readonly hasDaysTarget: boolean;
    readonly daysTarget: HTMLElement;
    readonly hasHoursTarget: boolean;
    readonly hoursTarget: HTMLElement;
    readonly hasMinutesTarget: boolean;
    readonly minutesTarget: HTMLElement;
    readonly hasSecondsTarget: boolean;
    readonly secondsTarget: HTMLElement;
    readonly countingDownClass: string;
    readonly hasCountingDownClass: boolean;
    readonly endedClass: string;
    readonly hasEndedClass: boolean;
    _interval: null | ReturnType<typeof window.setInterval>;
    get _removeUnused(): boolean;
    get endedClasses(): string[];
    get countingDownClasses(): string[];
    get _deadlineDate(): Date;
    connect(): void;
    disconnect(): void;
    deadlineValueChanged(): void;
    _tick(): void;
    _updateTarget(target: HTMLElement, value: number): void;
    _removeTargetIfUnused(target: HTMLElement, value: number): void;
    _years(duration: Duration): number;
    _months(duration: Duration): number;
    _days(duration: Duration): number;
    _hours(duration: Duration): number;
    _minutes(duration: Duration): number;
    _seconds(duration: Duration): number;
}
//# sourceMappingURL=countdown_controller.d.ts.map