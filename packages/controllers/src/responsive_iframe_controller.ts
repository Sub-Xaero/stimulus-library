import { BaseController } from "@stimulus-library/utilities";
import { useEventListener } from "@stimulus-library/mixins";

interface ResponsiveIframeMessage {
  name: string,
  height: number,
}

export class ResponsiveIframeWrapperController extends BaseController {

  connect() {
    useEventListener(this, window, "message", this.messageReceived);
  }

  messageReceived(message: MessageEvent<ResponsiveIframeMessage>) {
    let data = message.data;
    if (data.hasOwnProperty("name") && data.name === "iframe-body" && data.hasOwnProperty("height")) {
      this.resize(data.height);
    }
  }

  resize(height: number) {
    (this.el as HTMLIFrameElement).style.height = `${height}px`;
  }

}

export class ResponsiveIframeBodyController extends BaseController {

  connect() {
    // If this Window is inside a frame
    if (window.self !== window.top) {
      useEventListener(this, window, "resize", this.postUpdate, {debounce: 200});
      this.postUpdate();
    }
  }

  postUpdate() {
    let payload: ResponsiveIframeMessage = {name: "iframe-body", height: this.getHeight()};
    window.parent.postMessage(
      payload,
      "*",
    );
  }

  getHeight(): number {
    const body = document.body;
    const html = document.documentElement;

    // Get the largest height out of body and html's various height measurements
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

}
