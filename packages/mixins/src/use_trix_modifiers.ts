import { controllerMethod } from "@stimulus-library/utilities";
import { Controller } from "@hotwired/stimulus";

export interface TrixElementsPayload {
  toolbar: HTMLElement,
  editor: HTMLElement
}

export class TrixComposableController extends Controller {
  declare install?: (elements: TrixElementsPayload) => void;
  declare uninstall?: (elements: TrixElementsPayload) => void;
}

export function useTrixModifiers(controller: TrixComposableController) {
  // keep a copy of the lifecycle function of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
  let observing = false;

  const observerCallback = (entries: MutationRecord[], observer: MutationObserver) => {
    entries.forEach(mutation => {
      if (mutation.type === "childList" && Array.from(mutation.addedNodes).some((el) => (el as HTMLElement).tagName === "TRIX-TOOLBAR")) {
        attemptSetup();
        observer.disconnect();
      }
    });
  };
  const pasteHandler = (event: Event) => controllerMethod(controller, "pasteEvent").call(controller, event);

  const observer = new MutationObserver(observerCallback);

  const attemptSetup = () => {
    if (controller.element.tagName !== "TRIX-EDITOR") {
      throw new Error("Expected controller to be mounted on an instance of <trix-editor>");
    }
    const editor = controller.element;
    const editorParent = controller.element.parentElement;
    if (editorParent == null) {
      throw new Error("Could not traverse DOM tree from <trix-editor>");
    }

    editor.addEventListener("trix-paste", pasteHandler);

    const toolbar = editorParent.querySelector("trix-toolbar");

    if (!observing && !toolbar) {
      // toolbar is not in the DOM yet, wait for it to arrive before running setup
      observing = true;
      observer.observe(editorParent, { childList: true });
      return;
    } else if (!toolbar) {
      // Fallback, in case this runs twice, or mutation observer logic fails
      throw new Error("Could not find an instance of <trix-toolbar> that is a sibling of this <trix-editor>");
    } else {
      // Do not need MutationObserver, all elements are present and correct
      observer.disconnect();
    }

    controllerMethod(controller, "install").call(controller, { toolbar, editor });
  };

  const teardown = () => {
    if (controller.element.tagName !== "TRIX-EDITOR") {
      throw new Error("Expected controller to be mounted on an instance of <trix-editor>");
    }
    const editor = controller.element;
    const editorParent = controller.element.parentElement;
    if (editorParent == null) {
      throw new Error("Could not traverse DOM tree from <trix-editor>");
    }

    editor.removeEventListener("trix-paste", pasteHandler);
    const toolbar = editorParent.querySelector("trix-toolbar");
    if (!toolbar) {
      throw new Error("Could not find <trix-toolbar> that is a sibling of this <trix-editor> element");
    }
    controllerMethod(controller, "uninstall").call(controller, { toolbar, editor });
  };

  attemptSetup();

  Object.assign(controller, {
    disconnect() {
      observer.disconnect();
      teardown();
      controllerMethod(controller, "uninstall").call({ toolbar, editor: controller.element });
      controllerDisconnect();
    },
  });
}
