import { Controller } from "stimulus";
import { WindowResizePayload } from "stimulus-use/dist/use-window-resize/use-window-resize";
interface ResponsiveIframeMessage {
    name: string;
    height: number;
}
export declare class ResponsiveIframeWrapperController extends Controller {
    boundMessageReceived: (message: MessageEvent<ResponsiveIframeMessage>) => void;
    connect(): void;
    disconnect(): void;
    messageReceived(message: MessageEvent<ResponsiveIframeMessage>): void;
    resize(height: number): void;
}
export declare class ResponsiveIframeBodyController extends Controller {
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