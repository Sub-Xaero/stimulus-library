import { BaseController } from "../../utilities/base_controller";
import { Duration } from "date-fns";
export declare class TimeDistanceController extends BaseController {
    static values: {
        timestamp: NumberConstructor;
    };
    timestampValue: number;
    readonly hasTimestampValue: boolean;
    _timeout: number | null;
    _timestamp: Date;
    get _duration(): Duration;
    get _nextUpdate(): number | null;
    timestampValueChanged(): void;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    _update(): void;
}
//# sourceMappingURL=time_distance_controller.d.ts.map