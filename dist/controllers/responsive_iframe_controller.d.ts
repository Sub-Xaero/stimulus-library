import { WindowResizePayload } from "stimulus-use/dist/use-window-resize/use-window-resize";
import { BaseController } from "../utilities/base_controller";
interface ResponsiveIframeMessage {
    name: string;
    height: number;
}
export declare class ResponsiveIframeWrapperController extends BaseController {
    initialize(): void;
    connect(): void;
    disconnect(): void;
    messageReceived(message: MessageEvent<ResponsiveIframeMessage>): void;
    resize(height: number): void;
}
export declare class ResponsiveIframeBodyController extends BaseController {
    static debounces: string[];
    observe: () => void;
    unobserve: () => void;
    connect(): void;
    windowResize(payload: WindowResizePayload): void;
    postUpdate(): void;
    getHeight(): number;
}
export {};
//# sourceMappingURL=responsive_iframe_controller.d.ts.map