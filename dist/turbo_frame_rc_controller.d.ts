import { BaseController } from "./base_controller";
export declare class TurboFrameRCController extends BaseController {
    static values: {
        frameId: StringConstructor;
        src: StringConstructor;
        loadingMessage: StringConstructor;
    };
    readonly frameIdValue: string;
    readonly srcValue: string;
    readonly hasSrcValue: boolean;
    readonly loadingMessageValue: string;
    readonly hasLoadingMessageValue: boolean;
    toggle(event?: Event | null): void;
    setSrc(event?: Event | null): void;
    clear(event?: Event | null): void;
    private getFrame;
    private getSrc;
}
//# sourceMappingURL=turbo_frame_rc_controller.d.ts.map