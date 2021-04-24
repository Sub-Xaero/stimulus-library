import { BaseController } from "../../utilities/base_controller";
export declare class MediaPlayerController extends BaseController {
    static targets: string[];
    readonly mediaTarget: HTMLMediaElement;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    play(event?: Event): Promise<void>;
    pause(event?: Event): void;
    restart(event?: Event): void;
    seek(event?: Event): void;
}
//# sourceMappingURL=media_player_controller.d.ts.map